import React from 'react'
import Home from './Home/Home'
import { Route, Routes } from 'react-router-dom'
import Course from '../src/course/Course'
import Signup from './components/Signup'

function App() {
  
  return (
    <>
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/course" element={<Course/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
    </>
  )
}

export default App
