import React from "react";
import Banner from "./Banner";
import Footer from "./Footer";
import Service from "./Service";
import About from "./About";
import 'bootstrap/dist/css/bootstrap.min.css'
function Home(){
    return(
        <>
        {/* <Header /> */}
        <Banner img="/imgs/banner.png"/>
        <Service link="/DesignPage" btn="btn1" name="Design" src="./imgs/design.png" description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries" />
        <Service link="/Impelement" colorP="whiteColor" background="background" flexEnd="flexEnd" btn="btn4" flex="changeDirec" name="Impelemntation" src="./imgs/two.jpg" description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries" />
        <About />
        <Footer />
        </>
    );
}
export default Home