import React from 'react'
import Task from './Task'
import { useState } from 'react';



const TaskList = ({newTasks, setTasks}) => {
    
  return (
    <div className='h-auto flex justify-center'>
        <div className='w-90 bg-white rounded-[10px] px-3'>
            {newTasks.map((elem, key) => {
                return <Task key={key} id={elem.id} val={elem.task} completed={elem.completed} setTasks={setTasks} tasks={newTasks}/>
            })}
        </div>
    </div>
  )
}

export default TaskList;