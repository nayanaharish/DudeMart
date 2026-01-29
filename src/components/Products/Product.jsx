import React from 'react'
import Hero from './Hero/Hero'
import Categories from './Categories/Categories'
import Data from './Data/Data.jsx'
import { useState } from 'react';

function Product() {

   
   const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");
  return (
    <div>
       <Hero /> 
      <Categories  setProducts={setProducts} category={category} setCategory={setCategory}  />
      <Data  products={products} setProducts={setProducts}   />
    </div>
  )
}

export default Product
