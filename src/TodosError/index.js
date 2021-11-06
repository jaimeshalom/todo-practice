import React from "react";
import { MessagePage } from '../MessagePage';

function TodoError({error}) {
    return (
        <MessagePage
            icon = '⚠️'
            title = '¡Ups, ocurrió algo inesperado!'
            message = 'Hubo un error al recuperar tus TODOs, por favor intenta más tarde.'
        />
    )
}

export { TodoError };
