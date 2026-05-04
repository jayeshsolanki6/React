import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Navbar = () => {
    const navigate = useNavigate()
    return (
        <div className='nav'>
            <div>
                <h1>Web Site</h1>
                <button onClick={() => {
                    navigate(-1)
                }}>Back</button>
                <button onClick={()=>{
                    navigate(+1)
                }}>Next</button>
            </div>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/product'>Product</Link>
            </div>
        </div>
    )
}

export default Navbar