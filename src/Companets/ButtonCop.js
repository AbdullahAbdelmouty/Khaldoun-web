import React from "react";
import './ButtonCop.css'
import { Button } from "react-bootstrap";
function ButtonCop (props){
    return(
        <>
        <input name={props.name} className={props.className} type={props.type} value={props.value} id={props.id}/>
        </>
    );
}
export default ButtonCop