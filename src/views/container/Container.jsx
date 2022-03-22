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
  
  const addToCart = (products) =>{
    const item = {id: products.id, description: products.description,category: products.category, name: products.name, 
    price: products.price, gender: products.gender, key: products.id, img:products.img, cartId: products = Date.now()} 
    setCartItem(current => [...current, {...item}]);
    console.log(item)
    }
  const removeCart = (products) => {
    const item = { id: products.id, description: products.description, category: products.category, name: products.name, 
    price: products.price, key: products.id, img:products.img}
    setCartItem(cartItem.filter((item) => item.cartId !== products.cartId)); 
    console.log(item)
  }

  const sendOrder = () => {
    let string = ["Hola Evren. Me gustaria adquirir los siguientes productos: "];
    cartItem.forEach((item) => {
      const { category, name, gender, price } = item;
      string.push(`Producto: ${category} ${name} para ${gender} con valor de $ ${price}.`);
    });
    string.push('¡Muchas Gracias!')
    let key = string.join(" - ");
    let url = key.replace(/\s+/g, "%20");
    window.open(`https://wa.me/573154580599?text=${url}`);
  
    cartItem.splice(0, cartItem.length);
    setCartItem([...cartItem]);
  };

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
        <Route path='/cart' element={<ShoppingCart  sendOrder={sendOrder} removeCart={removeCart} addToCart={addToCart} cartItem={cartItem} />}/>
        </Routes>
        <GoTop/>
        <Footer/>
        </BrowserRouter>
    </main>
  )
}

export default Container