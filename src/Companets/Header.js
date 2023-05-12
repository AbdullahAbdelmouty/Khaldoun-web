import React, { useState } from 'react';
import Logo from './Logo';
import './Header.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Container, Row} from 'react-bootstrap';
import Pcmenu from './Pcmenu';
import PhoneMenu from './PhoneMenu';
function Header(props){
  
  // let width = window.screen.width;
  let width;
  const [bar,setBar] = useState(true);
    return(

        <div className='header'>
            <Container fluid className='ps-4 pe-4'>
            <Row className='align-items-center'>
                <Col>
                <Logo />
                </Col>
            <Col className='d-flex justify-content-end'>
            {window.screen.width < 760? <PhoneMenu />: <Pcmenu/>}
            </Col>
            </Row>
        </Container>
        </div>
    );
}
export default Header;