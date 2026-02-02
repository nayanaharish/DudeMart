import React from 'react'
import Home from '../../pages/Home/Home';
import Product from '../../pages/Products/Product'
import Shop from "../../pages/Shop/Shop.jsx"
import Contact from "../../pages/Contact/Contact.jsx"
import ProductDetails from "../../pages/ProductDetails/ProductDetails.jsx"
import SignIn from "../../pages/Registration/SignIn.jsx"
import { useState } from 'react';
import { Routes , Route} from 'react-router-dom';

function Container(props) {
    const [products, setProducts] = useState([]);
      const [category, setCategory] = useState("");
  return (
    <div>
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Product  products={products} setProducts={setProducts} category={category} setCategory={setCategory} />} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/contact" element={<Contact/>} />     
        <Route path="/product-details/:id" element={<ProductDetails/>} />
        <Route path="/*" element={<h1>404 Not Found</h1>} /> 
        <Route path='/SignIn' element={< SignIn  setLogin={props.setLogin} login={props.login} />}/>
      </Routes>
    </div>
  )
}

export default Container
