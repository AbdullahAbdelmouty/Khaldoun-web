import React from "react";
import './Service.css';
import { Link } from "react-router-dom";
import { Container,Row,Col } from "react-bootstrap";
import ButtonCop from "./ButtonCop";
function Service (props){
    return(
        <Container fluid className={props.background}>
            <Row className={props.flex}>
                <Col xs={5} md={4} className="d-flex align-items-center">
                <img src={props.src} alt="" className="serOne"/>
                </Col>
                <Col xs={7} md={8} className="d-flex align-items-center" id={props.flexEnd}>
                {/* <div className="SerContant"> */}
                    <div className="serText ">
                    <h2>{props.name}</h2>
                    <p id={props.colorP}>{props.description}</p>
                    {/* <Button variant="primary" className="fs-6" style={{borderRadius: "0",color: "#C9A17D",border: "0"}}>{props.name}</Button> */}
                    <Link to={props.link}><ButtonCop type="button" value={props.name} className={props.btn}/></Link>
                    </div>
                </Col>
            </Row>
        </Container>

        // </div>
    );
}
export default Service