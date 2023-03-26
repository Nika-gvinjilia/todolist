import Header from "./components/header";
import { useState } from "react";
import Form from "./components/form";
import Todolist from "./components/todolist";
import "./app.css";

const App =() => {
  const [input,setinput] = useState("");
  const [todos,setTodos] = useState([]);
  const [editTodo,setEditTodo] = useState(null);
  return (
    <div className="container">
     <div className="app-wrapper">
     <div>
     <Header/>
     </div>
     <div>
      <Form
      input = {input}
      setinput = {setinput}
      todos = {todos}
      setTodos = {setTodos}
      editTodo = {editTodo}
      setEditTodo = {setEditTodo}
      />
     </div>
     <div>
      <Todolist
      todos = {todos}
      setTodos = {setTodos}
      setEditTodo = {setEditTodo}
      />
     </div>
     </div>
    </div>
  );
}

export default App;
