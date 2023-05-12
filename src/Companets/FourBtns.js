import React from "react";
import './FourBtns.css'
function FourBtns(props){
    return(
        <div className="question">
            <h3 >
            {props.header}
            </h3>
            <div className="buttonsContainer">
            <div className="button">
            <input type="radio" id="a25" name={props.name} value={props.value1}
            onChange={props.change}/>
            <label className="" htmlFor="a25">{props.btn1}</label>
            </div>
            <div className="button">
            <input  type="radio" id="a50" name={props.name} value={props.value2} 
            onChange={props.change}/>
            <label className="" htmlFor="a50">{props.btn2}</label>
            </div>
            <div className="button">
            <input type="radio" id="a75" name={props.name} value={props.value3} 
            onChange={props.change}/>
            <label className="" htmlFor="a75">{props.btn3}</label>
            </div>
            <div className="button">
            <input type="radio" id="a85" name={props.name} value={props.value4} 
            onChange={props.change}/>
            <label className="" htmlFor="a85">{props.btn4}</label>
            </div>
            </div>
        </div>
    );
}
export default FourBtns;