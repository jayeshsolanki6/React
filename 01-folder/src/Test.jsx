import React from 'react'
import axios from 'axios'

const GetData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=1&limit=10`)
    console.log(response)
}

const Test = ()=>{
    return (
        <div>Hello{GetData}</div>
    )
}
export default Test