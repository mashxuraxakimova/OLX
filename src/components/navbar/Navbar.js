import React from 'react'
import './Navbar.css'
import { Link, NavLink, useLocation } from 'react-router-dom'

function Navbar() {
    const { pathname} = useLocation()
    console.log( pathname );

    if (pathname === "/login"){
        return <></>
    }
  return (
    <div className="navbar">
        <img className='olx' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWSp_jVQ2lNvj2LaFhxO9osgxhzR66E1SUJp-xJDJqjhN50mG9V7hLqwOPFL4SqL6gq4M&usqp=CAU" alt="" />
        <h2>Navbar</h2>
        <NavLink className="nav_link" to={'/'}>Home</NavLink>
        <NavLink className="nav_link" to={'/about'}>About</NavLink>
        <NavLink className="nav_link" to={'/login'}>Login</NavLink>
    </div>
    
  )
}

export default Navbar