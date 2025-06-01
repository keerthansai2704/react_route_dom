import React from 'react';
import "./navbar.css";
import {Link} from "react-router-dom"
function Navbar(){
    return(
        <div className="navbar">
            <h1>React</h1>
            <div id='navlinks'>
               <Link to="/about"> <p>About</p></Link>
                <Link to="/contact"><p>Contact</p></Link>
                <Link to="/services"><p> Services</p></Link>
            </div>
        </div>

    )
}
export default Navbar;