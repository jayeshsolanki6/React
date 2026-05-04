import React from 'react'
import { useState } from 'react'

const Button = ({color, setBg}) => {
  return (
    <button className='bg-white w-32 h-8  rounded-full' onClick={() => setBg(color)}>
      {color}
    </button>
  )
}


const App = () => {
  const [bg, setBg] = useState("olive");
  const bgColors = {
    red : "bg-red-700",
    blue : "bg-blue-700",
    green : "bg-green-700",
    olive : "bg-olive-700"
  }
  return (
    <div className={`${bgColors[bg]} h-screen w-screen flex justify-center items-end p-20`}>
      <div className=' flex rounded-full bg-black gap-1 p-4'>
        <Button setBg={setBg} color='red'/>
        <Button setBg={setBg} color='blue'/>
        <Button setBg={setBg} color='green'/>
      </div>
    </div>
  )
}

export default App