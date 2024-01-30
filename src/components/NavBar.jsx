import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='flex flex-row justify-around'>
        <Link to="/">Home</Link>
        <Link to="/Sandbox">Sandbox</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/About">About</Link>
    </div>
  )
}

export default NavBar