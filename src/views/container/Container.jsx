import React from 'react'
import {BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import NavBar from './components/NavBar/NavBar'

const Container = () => {
  return (
    <main>
        <BrowserRouter>
        <NavBar/>
        <Footer/>
        </BrowserRouter>
    </main>
  )
}

export default Container