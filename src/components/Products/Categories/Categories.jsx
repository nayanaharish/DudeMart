import React, { useEffect } from 'react'
import hero1 from "../../../assets/images/hero/hero1.jfif"
import hero2 from "../../../assets/images/hero/hero2.jfif";
import hero3 from "../../../assets/images/hero/hero3.jfif"
import hero4 from "../../../assets/images/hero/hero4.jfif"
import hero5 from "../../../assets/images/hero/hero5.jfif"
import "./categories.css";
import{getProductsByCategories} from "../../Products/Data/Data.js"

function Categories({ setProducts,category,setCategory }) {

  useEffect(() => {

    getProductsByCategories(category, setProducts);
   }, [category]);

  return (
    <div className='categories'>
      <div  onClick={()=>{
      setCategory("all");
        
      // getProductsByCategories(category, setProducts);
    }}      
      ><img src={hero1} alt="" />
      <h3>All</h3>
      </div>


      <div  onClick={()=>{

      setCategory("electronics");
      // getProductsByCategories(category, setProducts);
      
      
    }}><img src={hero2} alt="" />
      <h3>Electronics</h3>
      </div>


      <div onClick={()=>{
      setCategory("jewelery");
      // getProductsByCategories(category, setProducts);
    }}><img src={hero3} alt="" />
      <h3>Jewellery</h3>
      </div>


      <div onClick={()=>{
      setCategory("men's clothing");
      // getProductsByCategories(category, setProducts);
    }}>
      <img src={hero4} alt="" />
      <h3>Mens Clothing</h3>
      </div>

      <div onClick={()=>{
      setCategory("women's clothing");
      // getProductsByCategories(category, setProducts);  
      
    }}><img src={hero5} alt="" />
      <h3>Women's Clothing</h3>
      </div>

    </div>
  )
}

export default Categories
