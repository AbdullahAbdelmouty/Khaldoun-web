import React from "react";
import { Link } from 'react-router-dom';
import {ImCross} from 'react-icons/im'
function DropDown(){
    function crossFun(){
        const dropDown = document.querySelector("#menuDrop");
        const cross = document.querySelector("#cross");
        dropDown.classList.remove("menuDropActive");
        dropDown.classList.add("menuDrop");
        cross.classList.remove("crossActive");
        cross.classList.add("cross");
    }
    return(
        <div className="dropDown">
            <button className="menu-bar cross" onClick={crossFun} id="cross" >
            <ImCross />
            </button>
        <ul className='menuDrop justify-content-center mb-0' id="menuDrop">
        <li>
        <Link to='/'>Home</Link>
        </li>
        <li>
        <Link to='/services' >Services</Link>
        </li>
        <li>
        <Link to='/about' >About</Link>
        </li>
        <li>
        <Link to='/contact' >Contact</Link>
        </li>
    </ul>
        </div>
    );
}
export default DropDown;