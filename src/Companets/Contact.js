import React ,{useRef} from "react";
import ButtonCop from "./ButtonCop";
import './Contact.css';
import Input from "./Input";
import emailjs from '@emailjs/browser';
import FourBtns from "./FourBtns";
function Contact(){
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
  
    emailjs.sendForm('service_tx7j0m9', 'template_kd1k2os', form.current, 'RRMeqRmXNULo1Nqiw')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    return(
        <form ref={form} onSubmit={sendEmail}>
            <div className="contactContainer" id="contact">
                <Input name="fullName" className = "contactInputOne" type='text' hint="Name"/>
                <Input name="email" className = "contactInputOne" type='email' hint="Email"/>
                <textarea name="message" className="textareaContact" rows="3" cols="30" placeholder="Your Massege"></textarea>
                <ButtonCop type="submit" value="submit" className="btn3"/>
        </div>
        </form>
    );
}
export default Contact;