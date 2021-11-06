import React from "react";
import { MessagePage } from "../MessagePage";

function WithNoMatches() {
    return (
        <MessagePage
            icon = '🔍'
            title = '¡No tenemos coincidencias!'
            message = 'Verifica las palabras con las que estás realizando la búsqueda o crea un nuevo TODO en el botón ➕'
        />
    );
}

export { WithNoMatches };
