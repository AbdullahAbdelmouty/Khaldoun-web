import React from "react";
import FourBtns from "./FourBtns";
import './FirstPageF.css'
import Input from "./Input";
import ButtonCop from "./ButtonCop";
function FirstPageF({formData,onChange}){
    return(
        <>
        {/* <FourBtns header="what is the design you want?" name="design" change={onChange} formData={formData}
        btn1="Outside Design" value1='Outside-Design'
        btn2="Interior Design" value2="Interior-Design"
        btn3="Outside&Interior" value3="Outside&Interior" 
        btn4="Other" value4="Other" 
        /> */}

<div className="question">
            <h3 >
            What is the design you want?
            </h3>
            <div className="buttonsContainer">

            <div className="button">
            <input type="radio" id="a25" name="design" value="Outside-Design" onChange={onChange}
            checked={formData.design === "Outside-Design"}
            />
            <label className="" htmlFor="a25">Outside Design</label>
            </div>
            <div className="button">
            <input  type="radio" id="a50" name="design" value="Interior-Design" onChange={onChange}
            checked={formData.design === "Interior-Design"}
            />
            <label className="" htmlFor="a50">Interior Design</label>
            </div>

            <div className="button">
            <input type="radio" id="a35" name="design" value="Outside&Interior" onChange={onChange}
            checked={formData.design === "Outside&Interior"}
            />
            <label className="" htmlFor="a35">Outside&Interior</label>
            </div>
            <div className="button">
            <input  type="radio" id="a60" name="design" value="Other" onChange={onChange}
            checked={formData.design === "Other"}
            />
            <label className="" htmlFor="a60">Other</label>
            </div>

            </div>
        </div>

        {/* <FourBtns header="For what you need the design" name="place" change={onChange} formData={formData}
        btn1="Appartment" value1='Appartment'
        btn2="Villa" value2="Villa"
        btn3="Office" value3="Office" 
        btn4="Other" value4="Other" /> */}

<div className="question">
            <h3 >
            For what you need the design ?
            </h3>
            <div className="buttonsContainer">

            <div className="button">
            <input type="radio" id="a25" name="place" value="Appartment" onChange={onChange}
            checked={formData.place === "Appartment"}
            />
            <label className="" htmlFor="a25">Appartment</label>
            </div>
            <div className="button">
            <input  type="radio" id="a50" name="place" value="Villa" onChange={onChange}
            checked={formData.place === "Villa"}
            />
            <label className="" htmlFor="a50">Villa</label>
            </div>

            <div className="button">
            <input type="radio" id="a35" name="place" value="Office" onChange={onChange}
            checked={formData.place === "Office"}
            />
            <label className="" htmlFor="a35">Office</label>
            </div>
            <div className="button">
            <input  type="radio" id="a60" name="place" value="Other" onChange={onChange}
            checked={formData.place === "Other"}
            />
            <label className="" htmlFor="a60">Other</label>
            </div>

            </div>
        </div>

        <div className="question">
        <h3 >
        Could you indicate the total area ?
        </h3>
        <div className="buttonsContainer">
            <Input value={formData.area} name="area" className = "questionInput" type='number' change={onChange}/>
            <ButtonCop name="Assestant-Apps" className="btn3" type="button" value="Assestant Apps"/>
            <ButtonCop name="SkipArea" className="btn3" type="button" value="Skip" />
        </div>
        </div>
        <div className="question">
            <h3 >
            Could you take some Photos for the building?
            </h3>
            <div className="buttonsContainer">
            <div>
            <label className="labelUpload">
            <input type="file" name="photoBuilding"/>
            <span>upload</span>
            </label>
            </div>
            <ButtonCop name="Skip-building" className="btn3" type="button" value="Skip" />
            </div>
        </div>
        </>

    );
}
export default FirstPageF;