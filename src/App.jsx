import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import HomePage from './Pages/home'
import AdminPage from './Pages/admin'
import LoginPage from './Pages/login'
import Test from './components/test'
import toast from 'react-hot-toast/headless'
import { Toaster } from 'react-hot-toast'


function App(){
  return(
    <div className='bg-primary text-secondary w-full h-screen'>
      <Toaster position='top-right'/>
      <Routes>
        <Route path='/' element={<HomePage/>} ></Route>
        <Route path='/admin/*'element={<AdminPage/>} ></Route>
        <Route path='/login' element={<LoginPage/>}></Route>
        <Route path='/test' element={<Test/>} ></Route>

      </Routes>
    </div>
  )
}

export default App
