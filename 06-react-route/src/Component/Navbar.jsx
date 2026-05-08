import React from 'react'
import { Link, useNavigate, NavLink } from 'react-router-dom'
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
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
                <NavLink to='/product'>Product</NavLink>
            </div>
        </div>
    )
}

export default Navbar