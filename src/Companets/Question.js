import React from "react";
import "./Question.css";
import Input from "./Input";
function Question({data,title,whatIsNext}){
    const element = data.map((ele)=>{ return <Input whatIsNext2 ={whatIsNext} type={ele.type} value={ele.value} className={ele.className} key={ele.id}/>})
    return(
        <div className="questionContainer">
        <h2 className="titleQuestion">{title}</h2>
        <div className="questionEles">
        {element}
        </div>
        </div>
    );
}
export default Question