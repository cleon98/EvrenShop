import React from 'react'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import { Home } from './components/Home/Home'
import NavBar from './components/NavBar/NavBar'

const Container = () => {
  return (
    <main>
        <BrowserRouter>
        <NavBar/>
        <Routes>
        <Route path='/' element={<Home/>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
    </main>
  )
}

export default Container