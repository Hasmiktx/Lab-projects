import React from "react";
import { Link } from "react-router-dom";
import "./Style.css"
const Header=()=>{
    return <div className="navbar">
       <Link to="/">Home</Link> 
       <Link to="/posts">Posts</Link> 

    </div>
}
export default Header;