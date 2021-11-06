import React from 'react';
import { TodoContext } from '../TodoContext';
import './CreateTodoButton.css';

function CreateTodoButton() {
    const { openModal, setOpenModal} = React.useContext(TodoContext);
    const handleClick = () => {
        setOpenModal(!openModal);
    }
    
    return (
        <button 
            className="CreateTodoButton"
            onClick={handleClick}
        >
            ➕
        </button>
    )
}

export { CreateTodoButton };
