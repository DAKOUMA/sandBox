import React from 'react'
import NavBar from '../components/NavBar'
import LinearCard from './SandBox/LinearCardPage'

import { Routes, Route, Link } from 'react-router-dom'

const SandBox = () => {
  return (
    <div className='pageContainer'>
      <NavBar />
      <Link to='/Sandbox/LinearCard'> LinearCard </Link>
      <Link to='/Sandbox/Neumorphism'> Neumorphism </Link>
    </div>
  )
}

export default SandBox