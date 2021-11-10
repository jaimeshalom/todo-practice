import React from "react";
import './TodoList.css';

function TodoList(props) {
  const renderFunc = props.children || props.render;
  return (
    <section className="TodoList TodoList__container">
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {/* {!props.error &&
        !props.loading &&
        !props.searchedTodos.length &&
        props.searchValue &&
        props.onWithNoMatches()
      } */}
      {!props.error &&
        !props.loading &&
        !props.totalTodos &&
        props.onEmptyTodos()
      }

      {!props.error &&
        !!props.totalTodos &&
        !props.searchedTodos.length &&
        props.onEmptySearchResult(props.searchText)
      }

      <ul className="TodoList__list">
        {!props.error && !props.loading && props.searchedTodos.map(renderFunc)}
      </ul>
    </section>
  )
}

export { TodoList };