import React, {useState} from 'react'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import { ShoppingCart } from './components/Cart/ShoppingCart'
import Footer from './components/Footer/Footer'
import GoTop from './components/GoTop/GoTop'
import { Home } from './components/Home/Home'
import NavBar from './components/NavBar/NavBar'
import JustMen from './components/Products/components/JustMen/JustMen'
import JustWomen from './components/Products/components/JustWomen/JustWomen'
import ProductsView from './components/Products/components/ProductsViews/ProductsView'
import Products from './components/Products/Products'
import items from '../../data/items'

const Container = () => {
  const {products} = items;
  const [cartItem, setCartItem] = useState([]);
  
  const addToCart = (product) =>{
    const cart = cartItem.find((item) => item.id === product.id);
    if(cart){
      setCartItem(
        cartItem.map((item) =>
        item.id === product.id ? {...cart, qty: cart.qty + 1} : item)
      )
    }else{
    setCartItem([...cartItem, {...product, qty: 1}])
   } 
}

  return (
    <main>
        <BrowserRouter>
        <NavBar/>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/catalogo' element={<Products products={products}/>}/>
        <Route path='/catalogo/hombre' element={<JustMen products={products} />}/>
        <Route path='/catalogo/mujer' element={<JustWomen products={products} />}/>
        <Route path='/catalogo/:id'  element={<ProductsView addToCart={addToCart} products={products} /> }/>
        <Route path='/cart' element={<ShoppingCart products={products} addToCart={addToCart} cartItem={cartItem} />}/>
        </Routes>
        <GoTop/>
        <Footer/>
        </BrowserRouter>
    </main>
  )
}

export default Container