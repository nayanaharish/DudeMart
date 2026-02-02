import React, { useEffect, useState } from 'react'
import hero1 from "../../../assets/images/hero/hero1.jfif";
import hero2 from "../../../assets/images/hero/hero2.jfif";
import hero3 from "../../../assets/images/hero/hero3.jfif"
import hero4 from "../../../assets/images/hero/hero4.jfif"
import hero5 from "../../../assets/images/hero/hero5.jfif"
import "./categories.css";
import{getProductsByCategories} from "../../Products/Data/Data.js"

function Categories({ products,setProducts,category,setCategory }) {

  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {

    getProductsByCategories(category, setProducts);
   }, [category]);

  return (
    <div className='categories'>
      <div  onClick={()=>{
      setCategory("all");
      setActiveCategory("all");
        
      // getProductsByCategories(category, setProducts);
    }}      
      ><img src={hero1} alt="" className={activeCategory === "all" ? "active-category" : "inactive"}/>
      <h3 style={{color:activeCategory === "all" ? "tomato" : "black"}}>All</h3>
      </div>


      <div  onClick={()=>{

      setCategory("electronics");
      setActiveCategory("electronics");
      // getProductsByCategories(category, setProducts);


    }}><img src={hero2} alt="" className={activeCategory === "electronics" ? "active-category" : "inactive"}/>
      <h3 style={{color: activeCategory === "electronics" ? "tomato" : "black"}}>Electronics</h3>
      </div>


      <div onClick={()=>{
      setCategory("jewelery");
      setActiveCategory("jewelery");
      // getProductsByCategories(category, setProducts);
    }}><img src={hero3} alt="" className={activeCategory === "jewelery" ? "active-category" : "inactive"} />
      <h3 style={{color:activeCategory==="jewelery" ? "tomato" : "black"}}>Jewellery</h3>
      </div>


      <div onClick={()=>{
      setCategory("men's clothing");
      setActiveCategory("men's clothing");
      // getProductsByCategories(category, setProducts);
    }}>
      <img src={hero4} alt="" className={activeCategory === "men's clothing" ? "active-category" : "inactive"} />
      <h3 style={{color:activeCategory==="men's clothing" ? "tomato" : "black"}}>Mens Clothing</h3>
      </div>

      <div onClick={()=>{
      setCategory("women's clothing");
      setActiveCategory("women's clothing");
      // getProductsByCategories(category, setProducts);  
      
    }}><img src={hero5} alt="" className={activeCategory === "women's clothing" ? "active-category" : "inactive"} />
      <h3 style={{color:activeCategory==="women's clothing" ? "tomato" : "black"}}>Women's Clothing</h3>
      </div>

    </div>
  )
}

export default Categories
