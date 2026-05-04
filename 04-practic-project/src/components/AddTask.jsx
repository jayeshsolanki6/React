import React, { useEffect, useState } from 'react'
import image from "../assets/image.png"
import TaskList from './TaskList';
const AddTask = ({setTasks}) => {
    const [text, setText] = useState('');

    const onSubmitUpdate = (e)=> {
        e.preventDefault();
        const newTask = {
            id : Date.now(),
            task : text,
            completed : false
        }
        setTasks((prev) => [...prev, newTask]);
        setText('');
    }

  return (
    <div className='pt-5 pb-3'>
        <div className='flex justify-center items-center gap-2 mb-2'>
            <h1 className='text-3xl font-bold'>To Do List</h1>
            <img className='h-12' src={image} alt="Logo" />
        </div>
        <form 
        onSubmit={(e)=>{
            onSubmitUpdate(e);
        }}
        className='w-fit border-2 border-gray-200 bg-white rounded-full pl-2 flex justify-center mx-auto'>
            <input 
            className='text-sm pl-2 pr-25 outline-none'
            type="text" 
            value={text}
            onChange={(e)=>{
                setText(e.target.value);
                
            }}
            placeholder='Add new task'/>
            <button className='active:scale-95 px-6 py-1 border-2 border-none bg-[#EA7764] text-white font-medium rounded-full'>Add</button>
        </form>
        
    </div>
  )
}

export default AddTask