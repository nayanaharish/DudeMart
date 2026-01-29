import axios from "axios";
/**
 * 
 * [{"id":1,
 * "title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
 * "price":109.95,
 * "description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
 * "category":"men's clothing",
 * "image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
 * "rating":{"rate":3.9,"count":120}},
 */
const API_URL = "https://fakestoreapi.com/products";

export function getData(setProducts)
{
axios
  //.get("https://api.escuelajs.co/api/v1/products")


  .get(API_URL)
  .then((response) => {
    console.log(response.data.typeof);
    console.log("Price "+response.data.price);
    
    setProducts(response.data)
  })
  .catch((error) => {
    console.error(error);
  });
}

export function getProductsByCategories(category, setProducts)
{
  
  // alert(category);

  if(category === "all")
  {
    getData(setProducts);
  }
  else
  {
    const data = getData((allProducts)=>{
      const filteredProducts = allProducts.filter((product)=>
      product.category === category
      );
      setProducts(filteredProducts);
    });
  }

}

