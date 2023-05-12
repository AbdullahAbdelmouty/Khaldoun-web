import React from "react";
import {FaBars} from 'react-icons/fa'
import DropDown from "./DropDwon";
import './PhoneMenu.css'

function PhoneMenu(){
    function barFunc(){
        const dropDown = document.querySelector("#menuDrop");
        const cross = document.querySelector("#cross");
        const barBtn = document.querySelector("#barBtn");
        barBtn.classList.add("barBtnRotate")
        dropDown.classList.remove("menuDrop");
        dropDown.classList.add("menuDropActive");
        cross.classList.remove("cross");
        cross.classList.add("crossActive");
    }
    return(
        <>
        <button className='menu-bar' id="barBtn" onClick={barFunc}>
        <FaBars />
        </button> 
        <DropDown />
        </>
    );
}
export default PhoneMenu;