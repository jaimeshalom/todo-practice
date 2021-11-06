import React from "react";
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoForm } from "../TodoForm";
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoError } from '../TodosError';
import { TodoLoading } from '../TodoLoading';
import { EmptyTodos } from '../EmptyTodos';
import { Modal } from '../Modal';


function AppUI() {
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
    } = React.useContext(TodoContext);
    return (
      <React.Fragment>
        <TodoCounter />
        <TodoSearch />
        <TodoList>
          {error && 
            <TodoError />
          }
          {loading && new Array(4).fill().map((item, index) => (
            <TodoLoading key={index} />
          ))}
          {!error && !loading && !searchedTodos.length &&
            <EmptyTodos />
          }
          {searchedTodos.map((todo, index) => (
              <TodoItem
                key={todo.key}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.key)}
                onDelete={() => deleteTodo(todo.key)}
              />
          ))}
        </TodoList>

        {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
        )}

        {!error && 
          <CreateTodoButton />
        }
      </React.Fragment>
    );
}

export { AppUI };
