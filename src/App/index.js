import React from "react";
import { useTodos } from './useTodos';
import { TodoHeader } from '../TodoHeader';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoForm } from "../TodoForm";
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoError } from '../TodosError';
import { TodoLoading } from '../TodoLoading';
import { WithNoMatches } from "../WithNoMatches";
import { EmptyTodos } from '../EmptyTodos';
import { Modal } from '../Modal';

function App() {
  const {
    totalTodos,
    completedTodos,
    error,
    loading,
    searchValue,
    setSearchValue,
    searchedTodos,
    toggleTodo,
    deleteTodo,
    openModal,
    addTodo,
    setOpenModal,
  } = useTodos();

  return (
    <React.Fragment>
      <TodoHeader>
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </TodoHeader>
      <TodoList>
        {error &&
          <TodoError />
        }
        {loading && new Array(4).fill().map((item, index) => (
          <TodoLoading key={index} />
        ))}
        {!error && !loading && !searchedTodos.length && searchValue &&
          <WithNoMatches />
        }
        {!error && !loading && !searchedTodos.length && !searchValue &&
          <EmptyTodos />
        }
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.key}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => toggleTodo(todo.key)}
            onDelete={() => deleteTodo(todo.key)}
          />
        ))}
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm
            addTodo={addTodo}
            setOpenModal={setOpenModal}
          />
        </Modal>
      )}

      {!error &&
        <CreateTodoButton
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      }
    </React.Fragment>
  );
}

export default App;
