import React from 'react';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import {delet, toggole, editTodo} from './redux/todo'


export default function Task({todo}) {

    const Dispatch=useDispatch();

    const handleToggole=(id)=>{
        Dispatch(toggole(id))
    }

    const handleDelet=(id)=>{
        Dispatch(delet(id))
    }

    const handleEdit=(id)=>{
        Dispatch(editTodo(id))
    }



  return (
    <div>
     
                
            <div className="d-flex align-items-center justify-content-between mb-3">
            <div style={{ flex: "I", padding: ".3em", border: "1px solid black", marginRight: "1em"}} >
                <div className="d-flex justify-content-between align-items-center">
                    
        {todo.description}
       <input type="checkbox" onClick={()=>handleToggole(todo.id)}
       checked={todo.isDone}
       />

       <Button variant='info' onClick={()=>handleEdit(todo.id)} >Edit</Button>
       <Button variant='warning' onClick={()=>handleDelet(todo.id)}>Delete</Button>
       </div>
       </div>
    </div>
    </div>
  )
}
