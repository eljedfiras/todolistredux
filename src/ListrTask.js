import React from 'react'
import Task from './Task';
import { useSelector } from 'react-redux';


function ListrTask() {
 
  const todos = useSelector(state=>state.todos)


  return (
    <div>
      <ul>

      {
        todos.map((el)=> <Task todo={el}  />)
      }



      </ul>
    </div>
  )
}

export default ListrTask
