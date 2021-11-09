import React from "react";
import { MessagePage } from '../MessagePage';

function EmptyTodos() {
  return (
    <MessagePage
      icon='📝'
      title='¡Crea tu primer TODO!'
      message='Para agregar tu primer TODO presiona el botón ➕'
    />
  );
}

export { EmptyTodos };
