import React from "react";
import './TodoItem.css'

function TodoItem(props) {
    return (
        <li className="TodoItem">
            <span className="TodoItem__check">✔️</span>
            <p className="TodoItem__text">{props.text}</p>
            <span className="TodoItem__delete">🗑️</span>
        </li>
    )
}

export { TodoItem };