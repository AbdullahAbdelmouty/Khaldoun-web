import React, { useState ,useRef} from "react";
import emailjs from '@emailjs/browser';
import { Container } from "react-bootstrap";
import FirstPageF from "./FirstPageF";
import SecondPageF from "./SecondPageF";
import ThirdPageF from "./ThirdPageF";
import './Form.css'
function Form(){
    // send form
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
  
    emailjs.sendForm('service_7sttm4a', 'template_qk2d1wg', form.current, 'myKvvrzuAjwxAPKd8')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    // send form
    const [formData,setFormData] = useState({
        design: "",
        place:"",
        area:0,
        style:"",
        budget:"",
        price:0,
        webPrice:0
    });
    const onChange = e=>{
        const {value,name,type,checked} = e.target;
        setFormData((state)=>({
            ...state,
            [name]: type === 'checkbox' ? checked : value
        }))
    };
    const onSubmit = (e)=>{
        e.preventDefault();
        show();
    }
    const show = ()=>{
        console.log(formData)
    }

    const [page, setPage] = useState(0);
    const FormTitles = ["Please follow these steps for order ", "What is your preferred design style ?", "Estimated price"];
    const PageDisplay = ()=>{
        if (page === 0) {
            return <FirstPageF formData={formData} onChange={onChange} />;
        } else if (page === 1) {
        return <SecondPageF formData={formData} onChange={onChange} />;
        } else {
        return <ThirdPageF formData={formData} onChange={onChange} />;
        }
    };

    const buttonType = ()=>{
        if (page <= 2) {
            return "button";
        } else {
            return "submit";
        }
    }
    return(
        <Container fluid>
        <form className="formContainer" ref={form} onSubmit={sendEmail}>
        <div className="">
            <h1 className="formTitle">{FormTitles[page]}</h1>
        </div>
            {PageDisplay()}
            <div className="nextBack">
                <button 
                className="btn2"
                type="button"
                disabled={page==0}
                onClick={() => {
                    setPage(page-1);
                    console.log(page)
                }}
                >Back</button>
                <button
                className="btn2"
                type={buttonType()}
                onClick={() => {
                    setPage(page+1);
                }}
                >
                    Next
                </button>
            </div>
        </form>
        </Container>
    );
}
export default Form;