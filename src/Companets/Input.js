import React from "react";
import './input.css';
function Input(props){
    return(
        <input name={props.name} type={props.type} value={props.value} className={props.className} placeholder={props.hint} onChange={props.change} />
    );
}
export default Input;