import React from "react";
import './TodoForm.css'
import { TodoContext } from "../TodoContext";

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('')
   
    const todoTextarea = document.getElementById("todoTextarea");
    
    React.useEffect(() => {
        todoTextarea?.focus();
    }, [todoTextarea]);
    
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);
    
    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }
    
    const onCancel = () => {
        setOpenModal(false);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        if (newTodoValue !== '') {
            addTodo(newTodoValue);
            setOpenModal(false);
        }
    };
    
    return (
        <form onSubmit={onSubmit}>
            <label>Escribe un nuevo TODO</label>
            <textarea
                tabIndex="1"
                value = {newTodoValue}
                onChange = {onChange}
                placeholder = "Nuevo todo..."
                id = "todoTextarea"
            >
            </textarea>
            <div className="TodoForm__buttonContainer">
                <button
                    tabIndex="3"
                    className="TodoForm__button TodoForm__button--cancel"
                    type="button"
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    tabIndex="2"
                    className="TodoForm__button TodoForm__button--add"
                    type="submit"
                >
                    Añadir
                </button>
            </div>
        </form>
    )
}

export { TodoForm };
