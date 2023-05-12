import React from "react";
import { Link } from "react-router-dom";
import './Logo.css'
function Logo(){
    return(
        <Link to='/'>
            <img src="./imgs/logo.png" alt="" className="logo"/>
        </Link>

    );
}
export default Logo