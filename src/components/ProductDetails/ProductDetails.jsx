import React from 'react';
import "./ProductDetails.css"
import { useState } from 'react';

function ProductDetails() {
// create a usestate to store the product details object
const [product,setProduct] = useState({
  "id":0,
  "image":"",
  "title":"",
  "rating":{
    "rate":0,
    "count":0
  },
  "category":"",
  "description":"",
  "price":0
});


  return (
    <div className='product-details'>
      <div className='image'>
        {product.id}
        <img src={product.image} alt="" width="100%" height="470px" />
      </div>
      {/* for details */}
      <div className='details'>
          <div className='product-title'>
              <h1>{product.title}</h1>
          </div>         
          <div className='product-rating'>
            <p>{product.rating.rate}</p>
            <p>****</p>
            <p>({product.rating.count})</p>
          </div>
          <div className='product-price'>
            <cite>$</cite><h2>{product.price}</h2>
          </div>
           <div className='product-description'>
            <p>{product.description}
            </p>
          </div>
          <div className='product-button'>
            <button className='back'>Back to products</button>
            <button className='cart'>Add to cart</button>
          </div>
      </div>
    </div>
  )
}

export default ProductDetails
