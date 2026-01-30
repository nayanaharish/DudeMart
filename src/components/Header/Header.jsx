import "./Header.css";
import { Link } from "react-router-dom";
function Header()
{
    return(
       
            
        <div className="header">
       
        <nav className="menu-bar">
            <ul>
                <li><Link to="/" >Home</Link></li>
                <li><Link to="/product" >Products</Link></li>
                <li><Link to="/shop" >Shop</Link></li>
                {/* <li><Link to="/profile" >Profile</Link></li> */}
                <li><Link to="/contact" >Contact Us</Link></li>
            </ul>
        </nav>       
       
            <button className="login-button"> Login
            </button>        

            
        </div>

       
    );

    

}


export default Header;
