import React from 'react'
import Home from './Home/Home'
import { Navigate, Route, Routes } from 'react-router-dom'
import Course from '../src/course/Course'
import Signup from './components/Signup'
import { Toaster } from 'react-hot-toast'
import About from '../src/about/About'
import { useAuth } from './context/AuthProvider'

function App() {

  const [authUser, setauthUser] = useAuth()
    console.log(authUser)
    
  return (
    <>
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/course" element={authUser?<Course/>:<Navigate to="/signup"/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
    <Toaster/>
    </>
  )
}

export default App
