import React from "react";
import "./TodoLoading.css";

function TodoLoading() {
    return (
        <div className="LoadingTodo__container">
            <span className="LoadingTodo__completeIcon"></span>
            <p className="LoadingTodo__text">...</p>
            <span className="LoadingTodo__deleteIcon"></span>
        </div>
    )
}

export { TodoLoading };
