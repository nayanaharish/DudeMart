import React from 'react';
import "./ProductDetails.css"
import { useState ,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
function ProductDetails() {
// create a usestate to store the product details object
const [product,setProduct] = useState({
  "id":0,  
  "title":"",
  "price":0,
  "description":"",
  "category":"",
  "image":"",
  "rating":{
    "count":0,
    "rate":0,
    
  },

  star:"*"
 
  
  
});

  // let star = "*";

//create useParam to get the path parameter , it returns an object with key para and param value
const {id} = useParams();

//use useEffect to get api data only  when this componets loads 

useEffect(()=>{

  const url = `https://fakestoreapi.com/products/${id}`;
  axios.get(url)
  .then(
    (res)=>{
      setProduct(res.data)
     
      let count = res.data.rating.rate;
      let stars = "";
      for (let i = 0; i < count; i++) {
        stars += "*";
}

      console.log(res);
      
      setProduct({
  ...res.data,
  star: stars
});

      
      
    }
  ).catch((error)=>{
    console.log(error);
  }
    
  )


},[])


  return (
    <div className='product-details'>
      <div className='image'>
        
        <img src={product.image} alt="" width="100%" height="470px" />
      </div>
      {/* for details */}
      <div className='details'>
          <div className='product-title'>
              <h1>{product.title}</h1>
          </div>         
          <div className='product-rating'>
            <p>{product.rating.rate}</p>
            <p>
              {
               
                product.star
              }
            </p>
            <p>Number of ratings :{product.rating.count}</p>
          </div>
          <div className='product-price'>
            <cite>$</cite><h2>{product.price}</h2>
          </div>
           <div className='product-description'>
            <p>{product.description}
            </p>
          </div>
          <div className='product-button'>
            <Link to="/products"><button className='back'>Back to products</button></Link>
            <button className='cart'>Add to cart</button>
          </div>
      </div>
    </div>
  )
}

export default ProductDetails
