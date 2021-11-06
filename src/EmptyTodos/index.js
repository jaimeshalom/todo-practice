import React from "react";
import { MessagePage } from '../MessagePage';

function EmptyTodos() {
    return (
        <MessagePage
            icon = '📝'
            title = '¡Crea tu primer TODO!'
            message = 'Haz clic en el ícono del + para agregar tu primer TODO'
        />
    );
}

export { EmptyTodos };
