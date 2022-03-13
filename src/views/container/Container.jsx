import React from 'react'
import {BrowserRouter } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'

const Container = () => {
  return (
    <main>
        <BrowserRouter>
        <NavBar/>
        </BrowserRouter>
    </main>
  )
}

export default Container