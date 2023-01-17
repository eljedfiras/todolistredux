import React ,{useState} from 'react';
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useDispatch} from 'react-redux';
import {add} from './redux/todo'
 

function AddTask(){

 const Dispatch = useDispatch()
 
 const [input,setInput] = useState('')

const handleAdd=()=>{
    Dispatch(add(input))
}


 
    return (
        <div className='AddContainer' style={{ gap: "1em"   }} >
            <input placeholder='Enter your task here' onChange={(e)=>setInput(e.target.value)} ></input>
            <br />
            <Button variant='success' onClick={handleAdd} >Add Task</Button>
        </div>
    )
}
export default AddTask
