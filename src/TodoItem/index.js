import React from "react";
import { CompleteIcon } from '../TodoIcon/CompleteIcon';
import { DeleteIcon } from '../TodoIcon/DeleteIcon';
import './TodoItem.css'

function TodoItem(props) {
    return (
        <li className="TodoItem">
            <CompleteIcon
                complete = {props.completed}
                onComplete = {props.onComplete}
            />
            <p className={`TodoItem__text ${props.completed && 'TodoItem__text--completed'}`}>{props.text}</p>
            <DeleteIcon
                onDelete = {props.onDelete}
            />
        </li>
    );
}

export { TodoItem };
