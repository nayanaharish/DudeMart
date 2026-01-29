import React, { useEffect, useState } from 'react'
import "./Hero.css";

import hero1 from "../../../assets/images/hero/hero1.jfif"
import hero2 from "../../../assets/images/hero/hero5.jfif";
import hero3 from "../../../assets/images/hero/hero3.jfif"
import hero4 from "../../../assets/images/hero/hero4.jfif"
import hero5 from "../../../assets/images/hero/hero5.jfif"
function Hero() {
    const images = [hero1,hero2,hero3,hero4,hero5];
    const headings = [
  "Shop Everything You Need",
  "Latest Electronic Gadgets",
  "Trendy Women’s Clothing",
  "Stylish Men’s Fashion",
  "Elegant Jewellery Collection"
];

    const descriptions = [
  "Discover a wide range of products for your everyday needs. From household essentials to lifestyle items, enjoy quality products at the best prices, all in one place.",

  "Explore the latest electronic gadgets and accessories designed to make your life smarter and easier. Shop mobiles, laptops, headphones, and more from trusted brands.",

  "Upgrade your wardrobe with the latest women’s fashion trends. Find stylish dresses, comfortable casuals, and elegant ethnic wear crafted for every occasion.",

  "Redefine your style with our men’s clothing collection. From formal wear to casual outfits, discover fashion that combines comfort, quality, and confidence.",

  "Add a touch of elegance to your look with our exclusive jewellery collection. Explore beautifully crafted designs perfect for daily wear and special occasions."
];


    const [index,setIndex] = useState(0);

     useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
      console.log(index);
      
    }, 5000);

    
  });
   
  return (
    <div className='hero' style={{backgroundImage:`url(${images[index]})`}}>
      <div className='hero-text'>
          <h1>{headings[index]}</h1>
          <p>{descriptions[index]}</p>
           </div>
    </div>
  )
}

export default Hero;
