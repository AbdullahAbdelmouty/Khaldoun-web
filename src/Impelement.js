import React, { useState ,useRef} from "react";
import emailjs from '@emailjs/browser';
import Banner from "./Companets/Banner";
import './Impelement';
import { Container } from "react-bootstrap";
import Footer from "./Companets/Footer";
import ButtonCop from "./Companets/ButtonCop";
import Input from "./Companets/Input";
import FourBtns from "./Companets/FourBtns";
import { Link } from "react-router-dom";
function Impelement(){
    // send email
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    emailjs.sendForm('service_tx7j0m9', 'template_l8csm0l', form.current, 'RRMeqRmXNULo1Nqiw')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    // send email
    const [formData,setFormData] = useState({
        DidHaveDesign: "",
        area:0,
        service:""
    });
    const onChange = e=>{
        const {value,name,type,checked} = e.target;
        setFormData((state)=>({
            ...state,
            [name]: type === 'checkbox' ? checked : value
        }))
    };
    const show = ()=>{
        console.log(formData)
    }
    return(
        <>
        <Banner img="/imgs/banner3.png"/>
        <Container fluid>
        <form className="formContainer" ref={form} onSubmit={sendEmail}>
        <div className="">
            <h1>please follow these steps for order </h1>
        </div>
        <div className="formContainer" >

        <div className="question">
            <h3 >
            Did you have the design?
            </h3>
            <div className="buttonsContainer">

            <div className="button">
            <input type="radio" id="a25" name="DidHaveDesign" value="yes" onChange={onChange}
            checked={formData.DidHaveDesign === 'yes'}
            />
            <label className="" htmlFor="a25">Yes</label>
            </div>
                <Link to='/DesignPage'>
                <ButtonCop name="go-to-design-page" className="btn3" type="button" value="No" />
                </Link>
            </div>
        </div>

        <div className="question">
            <h3 >
            if you have the design upload it
            </h3>
            <div className="buttonsContainer">
            <div>
            <label className="labelUpload">
            <input name="image" type="file"/>
            <span>upload</span>
            </label>
            </div>
            </div>
        </div>

        <div className="question">
        <h3 >
        Could you indicate the total area ?
        </h3>
        <div className="buttonsContainer">
            <Input value={formData.area} name="area" className = "questionInput" type='number' hint="...................." change={onChange}/>
            <ButtonCop name="Skip-area" className="btn3" type="button" value="Skip" />
        </div>
        </div>

        <div className="question">
            <h3 >
            Could you take some Photos for the building?
            </h3>
            <div className="buttonsContainer">
            <div>
            <label className="labelUpload">
            <input name="building-Image" type="file"/>
            <span>upload</span>
            </label>
            </div>
            <ButtonCop name="Skip-Photos-Bulding" className="btn3" type="button" value="Skip" />
            </div>
        </div>

        <FourBtns header="What is the required services?" name="service" change={onChange}
        btn1="Facade Finishing" value1='Facade-Finishing'
        btn2="Interior Finishing" value2="Interior-Finishing"
        btn3="Outside&Interior" value3="Outside&Interior" 
        btn4="Other" value4="Other" />
        </div>
            <div className="nextBack">
            <div className="nextBack">
                <Link to="/">
                <button 
                className="btn2"
                type="button"
                >Back</button>
                </Link>
                <button
                onClick={show}
                className="btn2"
                type="submit"
                >
                    confirm&pay
                </button>
            </div>
            </div>
        </form>
        </Container>
        <Footer />
        </>
    );
}
export default Impelement