import React from 'react'
import Header from './components/Header/Header.jsx'
import Product from './components/Products/Product.jsx'
import './App.css'
import { Routes ,Route } from 'react-router-dom'
import Shop from './components/Shop/Shop.jsx'
import Contact from './components/Contact/Contact.jsx'
import Home from './components/Home/Home.jsx'
import { useState } from 'react';
import ProductDetails from "./components/ProductDetails/ProductDetails.jsx";


function App() {
   const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");
  return (
    <div className="App">
      <Header/>
      {/* <Product /> */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Product  products={products} setProducts={setProducts} category={category} setCategory={setCategory} />} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/contact" element={<Contact/>} />     
        <Route path="/product-details/:id" element={<ProductDetails/>} />
        <Route path="/*" element={<h1>404 Not Found</h1>} /> 
      </Routes>
    </div>
  )
}

export default App
