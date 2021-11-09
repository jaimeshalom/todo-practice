import React from "react";
import { TodoIcon } from './';

function CompleteIcon({ complete, onComplete }) {
  return (
    <TodoIcon
      type="check"
      color={complete ? '#c0efc9' : 'gray'}
      onClick={onComplete}
    />
  );
}

export { CompleteIcon };
