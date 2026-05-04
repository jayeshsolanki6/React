import React from 'react'
import { useState } from 'react';
import { Check } from 'lucide-react';
import { Trash } from 'lucide-react';


const Task = ({id, val, setTasks, tasks, completed}) => {

    const deleteTask = ()=>{
        const arr = tasks.filter(elem => elem.id != id);
        setTasks(arr);
    }

    const onToggle = ()=>{
        const arr = [...tasks]
        arr.map(elem => {
            if(elem.id == id){
                elem.completed = !elem.completed;
            }
        });
        setTasks(arr);
    }
  return (
    <div
    className={`my-2 flex justify-between items-center ${completed ? "bg-[#e1e5e7] text-[#818385]" : "bg-[#D2D7DB]"} rounded-full px-2 py-1`}>
        <div 
        onClick={onToggle} 
        className='border-2 rounded-full border-[#EA7764] cursor-pointer'>
        <Check size={17} color="#ffffff" strokeWidth={3} 
        className={`${completed ? "" : "invisible"} bg-[#EA7764]  rounded-full`}/>
        </div>

        <div className=' font-medium '>
            {val}
        </div>

        <div onClick={deleteTask} 
        className={`cursor-pointer ${completed ? "text-[#818385]" : "text-[#000000]"} `}><Trash size={16} strokeWidth={3}/></div>

    </div>
  )
}

export default Task