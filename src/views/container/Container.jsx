import React from 'react'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import { Home } from './components/Home/Home'
import NavBar from './components/NavBar/NavBar'
import JustMen from './components/Products/components/JustMen/JustMen'
import JustWomen from './components/Products/components/JustWomen/JustWomen'
import ProductsView from './components/Products/components/ProductsViews/ProductsView'
import Products from './components/Products/Products'

const Container = () => {
  return (
    <main>
        <BrowserRouter>
        <NavBar/>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/catalogo' element={<Products/>}/>
        <Route path='/catalogo/hombre' element={<JustMen/>}/>
        <Route path='/catalogo/mujer' element={<JustWomen/>}/>
        <Route path='/catalogo/:id' element={<ProductsView/>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
    </main>
  )
}

export default Container