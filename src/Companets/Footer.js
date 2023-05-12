import React from "react";
import Contact from "./Contact";
import './Footer.css';
import Logo from './Logo';
import {CiFacebook } from "react-icons/ci";
import {ImWhatsapp } from "react-icons/im";
import {RiVisaLine } from "react-icons/ri";
import {FaCcPaypal } from "react-icons/fa";
import { Row ,Col, Container} from "react-bootstrap";
import { Link } from "react-router-dom";
function Footer(){
    return(
        <div className="footerContainer">
            <Container>
                <div className="d-flex justify-content-center">
                <Logo />
                </div>
            <Row>
                <Col className="pe-6 ps-6"  md={3} xs={6}>
                <h2 className="h2Footer">Contact Us</h2>
                <Contact />
                </Col>
                <Col className="text-center" md={3} xs={6}>
                <div className="socialMedia">
                <h2 className="h2Footer">social Media</h2>
                <div className="footerIcons">
                    <div className="socialIcons">
                        <CiFacebook style={{ fontSize: '46px',paddingRight: "5px" }}/>
                        <ImWhatsapp style={{ fontSize: '40px',paddingLeft: "5px"  }} />
                    </div>
                    <div className="paymentIcons">
                        <RiVisaLine/>
                        <FaCcPaypal/>
                    </div>
                </div>
            </div>
                </Col>
                <Col className="text-center" md={3} xs={6}>
            <div className="allPages">
            <h2 className="h2Footer">Links</h2>
            <ul className='pages '>
           <li>
                <Link to='/'>
                Home
                </Link>
                
            </li>
            <li >
                <Link to='/Services'>
                Services
                </Link>
            </li>
            <li>
                <Link to='/About'>
                About
                </Link>
            </li>
            <li>
                <Link to='/Contact'>
                Contact
                </Link>
            </li>
        </ul>
            </div>
                </Col>
                <Col className="text-center" md={3} xs={6}>
                <div>
                <h2 className="h2Footer">Services</h2>
            <ul className='pages'>
            <li>
                <Link to='/DesignPage/'>
                Design
                </Link>
            </li>
            <li>
                <Link to='/Impelement/'>
                Impelemntation
                </Link>
            </li>
        </ul>
            </div>
                </Col>
                
            </Row>
        </Container>
        </div>
    );
}
export default Footer;