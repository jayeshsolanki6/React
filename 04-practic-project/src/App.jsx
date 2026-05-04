import React, { useEffect } from 'react'
import AddTask from './components/addTask'
import TaskList from './components/TaskList'
import { useState } from 'react'
const App = () => {
  const [tasks, setTasks] = useState([]);

  // const [tasks, setTasks] = useState(() =>
  //   JSON.parse(localStorage.getItem('savedTask') || '[]')
  // );

  useEffect(()=>{
    const savedTask = localStorage.getItem("savedTask");
    if(savedTask){
      setTasks(JSON.parse(savedTask))
    }
  }, [])

  useEffect(()=>{
    localStorage.setItem("savedTask", JSON.stringify(tasks));
  })

  return (
    <div className='w-screen h-full'>
      <AddTask setTasks={setTasks}/>
      <TaskList newTasks={tasks} setTasks={setTasks}/>
    </div>
    
  )
}

export default App