import React from 'react'
import Hero from '../Products/Hero/Hero'
import Categories from '../Products/Categories/Categories'
import { useState } from 'react';
     

function Home({setProducts , products , category , setCategory}) {
  return (
    <div>
        <Hero /> 
      <Categories  setProducts={setProducts} category={category} setCategory={setCategory}  />
    </div>
  )
}

export default Home
