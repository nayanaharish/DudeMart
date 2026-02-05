import "./Header.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import LoginStatusContext from "../../pages/Registration/LoginStatusContext";
function Header()
{

    const [{login,setLogin}]= useContext(LoginStatusContext);

    console.log("value of login is ",login);
    
    var loginStatus ;

    if(!login)
    {
        loginStatus = <Link 
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
        loginStatus = <Link 
                    to="/"
                    className="login-button"
                    onClick={() => {
                    console.log("Logout clicked");
                    
                    setLogin(false);

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
            
               { loginStatus }
           </div>
 

            
        </div>

       
    );

    

}


export default Header;
