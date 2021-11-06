import React from "react";
import { TodoProvider } from "../TodoContext";
import { AppUI } from "./AppUI";

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: false},
//   { text: 'Tomar curso de intro a React', completed: true},
//   { text: 'Cantar con el cantante', completed: false},
//   { text: 'Trilalala', completed: true},
// ]

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
