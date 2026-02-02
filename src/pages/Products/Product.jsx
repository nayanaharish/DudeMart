import React from 'react'
import Hero from './Hero/Hero'
import Categories from './Categories/Categories'
import Data from './Data/Data.jsx'
import { useState } from 'react';


function Product({products, setProducts ,category , setCategory}) {

   
  
  return (
    <div>
       <Hero /> 
      <Categories products={products}  setProducts={setProducts} category={category} setCategory={setCategory}  />
      <Data  products={products} setProducts={setProducts}   />
    </div>
  )
}

export default Product
