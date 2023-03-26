import React from 'react'



const todolist = ({todos,setTodos,setEditTodo}) => {

     const handledelete = ({id}) =>{
        setTodos(todos.filter((todo) =>todo.id !== id))
     }
     const handlecomplete = (todo)=>{
        setTodos(
            todos.map((item)=>{
                if(item.id === todo.id){
                    return {...item,completed:!item.completed}
                }
                return item;
            })
        )
     }
     const handleEdit =({id}) =>{
        const findtodo = todos.find((todo)=>todo.id === id);
        setEditTodo(findtodo);
     }
  return (
    <div>
        {todos.map((todo) =>(
            <li className='list-item' key={todo.id}>
                <input 
                type="text"
                value={todo.title}
                className="list"
                onChange={(event) =>event.preventDefault()}
                />
                <button className="button-complete task-button" onClick={()=> handlecomplete(todo)}>
                    tick
                    
                </button>
                <button className="button-edit task-button" onClick={() =>handleEdit(todo)}>
                   edit
                </button>
                <button className="button-delete task-button" onClick={()=> handledelete(todo)}>
                    x
                </button>
            </li>
        ))}
    </div>
  )
}

export default todolist