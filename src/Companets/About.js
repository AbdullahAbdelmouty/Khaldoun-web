import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import './About.css'
import ButtonCop from "./ButtonCop";
function About (){
    return(
        <Container fluid className="p-0">
        <div className="aboutContainer" id="about">
        <p className="aboutText">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book. It has survived not only five centuries
        </p>
        <Link to='/about'>
        <ButtonCop type="button" value="Read More" className="btn3" id="aboutBtn"/>
        </Link>
        </div>
        <img src="./imgs/about.png" className='img-fluid ' alt='...' />
        </Container>
    );
}
export default About;