import './home.css'
import HomePage from "../../assets/images/Home/HomePage.jfif"
     

function Home() {
  return (
    <div>
       <img src={HomePage} alt="" />
       <h1 className='title'> Everything you need, in one place
            Shop millions of products at great prices
            Fast delivery. Easy returns.</h1>
    </div>
  )
}

export default Home
