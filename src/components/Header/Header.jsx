import "./Header.css";
function Header()
{
    return(
       
            
        <div className="header">
        <div>
            <h1>Brand Name</h1>
        </div>
        <nav className="menu-bar">
            <ul>
                <li>Home </li>
                <li>Shop</li>
                <li>Profile</li>
                <li>Contact Us</li>
            </ul>
        </nav>       
       
            <button className="login-button"> Login
            </button>        

            
        </div>

       
    );

    

}


export default Header;
