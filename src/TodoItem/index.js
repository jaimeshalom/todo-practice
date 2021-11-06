import React from "react";
import './TodoItem.css'

function TodoItem(props) {
    
    return (
        <li className="TodoItem">
            <span 
                className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={props.onComplete}
            >
                ✔️
            </span>
            <p className={`TodoItem__text ${props.completed && 'TodoItem__text--completed'}`}>{props.text}</p>
            <span 
                className="Icon Icon-delete"
                onClick={props.onDelete}
            >
                🗑️
            </span>
        </li>
    )
}

export { TodoItem };