import { LOGO_URL } from "../utils/constants";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnNameReact,setBtnNameReact] = useState("Login");   //constant variable is updated bcz the header is rendered again with the new instance newer const btnname
  console.log("Header rendered")
  useEffect(() => {   //imp concept if no dependency array => useffect is called on every render   
    console.log("useEffect called"); // if dependecy array is empty = [] => useeffect is called on initial render (just once)
  },[btnNameReact]);   // if dependency array is [btnNameReact] => called everytime btnNameReact is updated
  return (
      <div className="header">
        <div className="logo-container">
          <img
           className="logo"
            src={LOGO_URL}
            alt="Logo"
          />
        </div>
        <div className="nav-items">  
         
          <ul>  
            <li>
              <Link to = "/">Home</Link>  
              </li>
            <li>
              <Link to="/about">About Us</Link>
              </li>
            <li>
              <Link to = "/contact">Contact Us</Link>
              </li>
            <li>Cart</li>
            <button className="login"
              onClick={() => {
                btnNameReact === "Login" ?
                setBtnNameReact("Logout") :
                setBtnNameReact("Login")  ////used Link to inplace of a href bcz a href reloads the whole page but link only refreshes the content on the page
              }}
              >
              {btnNameReact}
              </button>
          </ul>
        </div>
      </div>
    );
};

export default Header;
