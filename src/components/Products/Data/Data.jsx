import React from 'react'
import { useState,useEffect } from 'react'
import  { getData } from "./Data.js"
import "./Data.css"
import { getProductsByCategories } from './Data.js'
import { Link } from 'react-router-dom'
function Data({ products, setProducts }) {
   

    useEffect(()=>{

       // getProductsByCategories(setProducts);
       getData(setProducts);
       
        

    },[])

  return (
    <div className='cards'>
     
     {
            products.map((product)=>
            (

                <div  className='card'>
                <img src={product.image} alt="" />
                <h4>{product.title}</h4>
                <p>$ {product.price}</p>
                <h4>{product.category}</h4>
                <div className='buttons'>
                     <Link to="/product-details"><button >Product Details</button></Link>

                    <button>Add to Cart</button>
                </div>
               
                </div>
                
                
            ))
        }
    </div>
  )
}

export default Data
