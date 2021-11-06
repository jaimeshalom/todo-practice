import React from "react";
import './MessagePage.css'

function MessagePage ({title, message, icon}) {
    return (
        <div className="MessagePage__container">
            <span className="MessagePage__icon">{icon}</span>
            <h3 className="MessagePage__title">{title}</h3>
            <p className="MessagePage__message">{message}</p>
        </div>
    )
}

export { MessagePage };
