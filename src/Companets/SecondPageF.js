import React from "react";
import './SecondPageF.css'
function SecondPageF({formData,onChange}){
    setTimeout(()=>{
        const panels = document.querySelectorAll('.panel');
        panels.forEach(panel =>{
    panel.addEventListener('click',()=>{
        if(panel.classList.contains('hover')){
            removeHoverClass();
            removeActiveClass();
            panel.classList.add('active');
        }
    })
})
panels.forEach(panel =>{
    panel.addEventListener('mouseover',()=>{
        if(!panel.classList.contains('active')){
            removeHoverClass();
            panel.classList.add('hover');
        }
    })
})
panels.forEach(panel =>{
    panel.addEventListener('mouseout',()=>{
        removeHoverClass();
    })
})
function removeActiveClass() {
    panels.forEach(panel=> panel.classList.remove('active'));
}
function removeHoverClass() {
    panels.forEach(panel=> panel.classList.remove('hover'));
}
    },100)
    return(
        <div className="pageTwoDesign">

<div className="containerImg">
        <div className="panel" 
        style={{ 
            backgroundImage: "url(./imgs/s1.jpg)" 
        }}>
            <h3>Scandinavian</h3>
        </div>
        <div className="panel" 
        style={{ 
            backgroundImage: "url(./imgs/s2.jpg)"  
        }}>
            <h3>Scandinavian</h3>
        </div>
        <div className="panel" 
        style={{ 
            backgroundImage: "url(./imgs/s3.JPG)"  
        }}>
            <h3>Scandinavian</h3>
        </div>
        </div>

        <div className="buttonCustom">
            <input type="radio" id="a85" name="style" value="Scandinavian" 
            checked={formData.style === "Scandinavian" }
            onChange={onChange}/>
            <label className="" htmlFor="a85">Scandinavian</label>
            </div>

        <div className="containerImg">
        <div className="panel" 
        style={{ 
            backgroundImage: "url(./imgs/m1.jpeg)" 
        }}>
            <h3>Modern Design</h3>
        </div>
        <div className="panel" 
        style={{ 
            backgroundImage: "url(./imgs/m2.jpeg)"  
        }}>
            <h3>Modern Design</h3>
        </div>
        <div className="panel" 
        style={{ 
            backgroundImage: "url(./imgs/m3.jpg)"  
        }}>
            <h3>Modern Design</h3>
        </div>
        </div>

        <div className="buttonCustom">
            <input type="radio" id="a25" name="style" value="Modern-Design" 
            checked={formData.style === "Modern-Design" }
            onChange={onChange}/>
            <label className="" htmlFor="a25">Modern Design</label>
            </div>

            <div className="containerImg">
        <div className="panel" 
        style={{ 
            backgroundImage: "url(./imgs/n1.jpg)" 
        }}>
            <h3>New Classic Design</h3>
        </div>
        <div className="panel" 
        style={{ 
            backgroundImage: "url(./imgs/n2.jpg)"  
        }}>
            <h3>New Classic Design</h3>
        </div>
        <div className="panel" 
        style={{ 
            backgroundImage: "url(./imgs/n3.jpg)"  
        }}>
            <h3>New Classic Design</h3>
        </div>
        </div>

            <div className="buttonCustom">
            <input  type="radio" id="a50" name="style" value="New-Classic-Design" 
            onChange={onChange} checked={formData.style === "New-Classic-Design"  }/>
            <label className="" htmlFor="a50">New Classic Design</label>
            </div>

            <div className="containerImg">
        <div className="panel" 
        style={{ 
            backgroundImage: "url(./imgs/i1.jpg)" 
        }}>
            <h3>Minimalist Design</h3>
        </div>
        <div className="panel" 
        style={{ 
            backgroundImage: "url(./imgs/i2.jpeg)"  
        }}>
            <h3>Minimalist Design</h3>
        </div>
        <div className="panel" 
        style={{ 
            backgroundImage: "url(./imgs/i3.jpg)"  
        }}>
            <h3>Minimalist Design</h3>
        </div>
        </div>

            <div className="buttonCustom">
            <input type="radio" id="a75" name="style" value="Minimalist-Design" 
            checked={formData.style === "Minimalist-Design" } onChange={onChange} />
            <label className="" htmlFor="a75">Minimalist Design</label>
            </div>

        </div>
    )
}
export default SecondPageF