import React from "react";
import './Banner.css'
import { Card } from "react-bootstrap";
function Banner(props){
    return(
        // <div id="home" className="banner"style={{ backgroundImage: "url(/imgs/banner.png)" }}>
        //     <div className="overlay"></div>
        // </div>
        <>
        <img src={props.img} className='img-fluid ' alt='...' />
        </>

    );
}
export default Banner