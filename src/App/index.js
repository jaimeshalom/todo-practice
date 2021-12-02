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
// import { WithNoMatches } from "../WithNoMatches";
import { EmptyTodos } from '../EmptyTodos';
import { Modal } from '../Modal';
import { ChangeAlert } from '../ChangeAlert';

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
    synchronizeTodos,
  } = useTodos();

  return (
    <React.Fragment>
      <TodoHeader loading={loading}>
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        searchText={searchValue}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        onError={() => <TodoError />}
        onLoading={() => <TodoLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchResult={(searchText) => 
          <p>No hay resultados para {searchText}</p>
        }
        // onWithNoMatches={() => <WithNoMatches />}
        // render={todo => (
        //   <TodoItem
        //     key={todo.key}
        //     text={todo.text}
        //     completed={todo.completed}
        //     onComplete={() => toggleTodo(todo.key)}
        //     onDelete={() => deleteTodo(todo.key)}
        //   />
        // )}
      >
        {todo =>
          <TodoItem
            key={todo.key}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => toggleTodo(todo.key)}
            onDelete={() => deleteTodo(todo.key)}
          />
        }
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

      <ChangeAlert
        synchronize={synchronizeTodos}
      />
    </React.Fragment>
  );
}

export default App;
