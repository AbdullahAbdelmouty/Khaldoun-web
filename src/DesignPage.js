import React from "react";
import "./DesignPage"
import Banner from "./Companets/Banner";
import Footer from "./Companets/Footer";
import Form from "./Companets/Form";
import { useState } from "react";
function DesignPage(){
    const [next,setNext] = useState(false);
    const que1 = [{id: 1,type: "button",className: "btnQue",value: "Outside Design"},
    {id: 2,type: "button",className: "btnQue",value: "Interior Design"},
    {id: 3,type: "button",className: "btnQue",value: "Outside and interior"},
    {id: 4,type: "button",className: "btnQue",value: "Other"}];
    return(
        <>
            <Banner img="/imgs/banner2.png"/>
            <Form />
            <Footer />
        </>
    );
}
export default DesignPage