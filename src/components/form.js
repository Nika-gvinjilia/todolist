import React, {useEffect} from 'react'

import {v4 as uuidv4} from "uuid";

const Form = ({input,setinput,todos,setTodos,editTodo,setEditTodo}) => {

    const updateTodo= (title,id ,completed)=>{
        const newTodo = todos.map((todo) =>
            todo.id === id? {title,id,completed}:todo
        );
        setTodos(newTodo);
        setEditTodo("");
    };
    useEffect(() => {
        if(editTodo){
            setinput(editTodo.title);
        }else{
            setinput("")
        }
    },[setinput,editTodo]);

    const oninputchange = (event)=>{
        setinput(event.target.value);
    }
    const onformsubmit = (event) =>{
        event.preventDefault();
        if(!editTodo){
            setTodos([...todos,{id: uuidv4(), title: input, completed: false}])
            setinput("");
        }else{
            updateTodo(input,editTodo.id,editTodo.completed)
        }
        
    }
  return (
    <form onSubmit={onformsubmit}>
        <input
        type="text"
        placeholder='add todo list component'
        className='task-input'
        value={input}
        required
        onChange={oninputchange}/>
        <button className='button-add' type='submit'>add</button>
    </form>
  )
}

export default Form