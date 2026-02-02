import SignIn from "../Registration/SignIn";
import "./Header.css";
import { Link } from "react-router-dom";
function Header(props)
{

    var login ;

    if(!props.login)
    {
        login = <Link 
                    to="/SignIn"
                    className="login-button"
                    onClick={() => {
                    console.log("Login clicked");
                    // any extra logic here
                    }}
               >
                 Login
               </Link> ;
    }
    else
    {
        login = <Link 
                    to="/"
                    className="login-button"
                    onClick={() => {
                    console.log("Login clicked");
                    
                    props.setLogin(false);

                    // any extra logic here
                    }}
               >
                 Logout
               </Link>
    }

    return(
       
            
        <div className="header">
       
        <nav className="menu-bar">
            <ul>
                <li><Link to="/" >Home</Link></li>
                <li><Link to="/products" >Products</Link></li>
                <li><Link to="/shop" >Shop</Link></li>
                {/* <li><Link to="/profile" >Profile</Link></li> */}
                <li><Link to="/contact" >Contact Us</Link></li>
            </ul>
        </nav>       
       
           <div>
            
               { login }
           </div>
 

            
        </div>

       
    );

    

}


export default Header;
