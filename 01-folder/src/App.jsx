import React from 'react'
import { useState } from 'react';

const App = () => {

  const [val, setVal] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.input.value);
  }

  return (
    <div>
      <form onSubmit={(e)=>{
        onSubmit(e);
      }}>
        <input 
        type="text" 
        value={val}
        onChange={(e)=>{
          setVal(e.target.value);
        }}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App