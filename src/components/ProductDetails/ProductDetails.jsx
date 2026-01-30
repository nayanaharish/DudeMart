import React from 'react';
import "./ProductDetails.css"

function ProductDetails() {
  return (
    <div className='product-details'>
      <div className='image'>
        <img src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png" alt="" width="100%" height="470px" />
      </div>
      {/* for details */}
      <div className='details'>
          <div className='product-title'>
              <h1>Lorem ipsum dolor sit amet.</h1>
          </div>         
          <div className='product-rating'>
            <p>4.8</p>
            <p>****</p>
            <p>(147)</p>
          </div>
          <div className='product-price'>
            <cite>$</cite><h2>360</h2>
          </div>
           <div className='product-description'>
            <p>product description Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, rerum.
              Lorem ipsum dolor sit amet.
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
