import { Route, Routes } from 'react-router-dom'

import React from 'react'

import Home from './pages/Home'
import SandBox from './pages/SandBox'
import About from './pages/About'
import Contact from './pages/Contact'

import LinearCardPage from './pages/SandBox/LinearCardPage'
import NeumorphismPage from './pages/SandBox/NeumorphismPage'

import './App.css'


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Sandbox' element={<SandBox />} />
      <Route path='/Sandbox/LinearCard' element={<LinearCardPage />} />
      <Route path='/Sandbox/Neumorphism' element={<NeumorphismPage />} />
      <Route path='/About' element={<About />} />
      <Route path='/Contact' element={<Contact />} />
    </Routes>
  )
}

export default App