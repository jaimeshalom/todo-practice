import React from "react";
import { useLocalStorage } from './useLocalStorage'

function useTodos() {
  const {
    item: todos,
    saveItem: saveTodos,
    synchronizeItem: synchronizeTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);

  const [searchValue, setSearchValue] = React.useState('');

  const [openModal, setOpenModal] = React.useState(false);

  const completedTodos = todos.filter(
    todo => !!todo.completed
  ).length;

  const totalTodos = todos.length;

  let searchedTodos = !searchValue.length > 0
    ? todos
    : todos.filter(
      todo => (
        todo.text.toLowerCase().includes(
          searchValue.toLowerCase()
        )
      )
    );

  const addTodo = (text) => {
    const newTodos = [...todos];

    newTodos.push({
      completed: false,
      text,
      key: Date.now(),
    });
    saveTodos(newTodos);
  };

  const toggleTodo = (key) => {
    const todoIndex = todos.findIndex(todo => todo.key === key);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  }

  const deleteTodo = (key) => {
    const todoIndex = todos.findIndex(todo => todo.key === key);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }

  return {
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    addTodo,
    toggleTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    synchronizeTodos,
  };
}

export { useTodos };
