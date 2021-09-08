//import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import Loading from "./components/Loading";
import TodoList from "./components/TodoList";

import axios from "axios";

function App() {
  const [todos, setTodos] = useState(null);//initialisation de state 

  const onUpdateTodo = (todo) => {
    const todoItemIndex = todos.findIndex((x) => x.id === todo.id);
    const newTodos = [...todos];

    const newTodo = newTodos[todoItemIndex];
    newTodo.completed = !newTodo.completed;
    newTodos[todoItemIndex] = newTodo;
    setTodos(newTodos);
  };

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((result) => {
      setTodos(result.data);
    });
  }, []); //[] ne se déclenche qu'une seule fois lorsque le composant se charge
//.then arrow function notion promise API
  return (
    <div>
      {todos ? (
        <TodoList todos={todos} onUpdateTodo={onUpdateTodo} />
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default App;
