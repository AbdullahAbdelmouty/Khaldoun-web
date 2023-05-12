import React from 'react';
import Input from './Input';
import './ThirdPageF.css'
function ThirdPageF ({formData,onChange}){
    return(
        <>
<div className="question">
            <h3 >
            What is the design you want?
            </h3>
            <div className="buttonsContainer">

            <div className="button">
            <input type="radio" id="a25" name="budget" value="1,500$-2,000$" onChange={onChange}
            checked={formData.budget === "1,500$-2,000$"}
            />
            <label className="" htmlFor="a25">1,500$ 2,000$</label>
            </div>
            <div className="button">
            <input  type="radio" id="a50" name="budget" value="2000$-3,000$" onChange={onChange}
            checked={formData.budget === "2000$-3,000$"}
            />
            <label className="" htmlFor="a50">2000$ 3,000$</label>
            </div>

            <div className="button">
            <input type="radio" id="a35" name="budget" value="More-than-3,000$" onChange={onChange}
            checked={formData.budget === "More-than-3,000$"}
            />
            <label className="" htmlFor="a35">More than 3,000$</label>
            </div>
            <div className="button">
            <input  type="radio" id="a60" name="budget" value="Other" onChange={onChange}
            checked={formData.budget === "Other"}
            />
            <label className="" htmlFor="a60">Other</label>
            </div>

            </div>
        </div>

        <div className="questionCustom">
        <h3 className='h4Question'>
        Estimated Price For Full ID design 
        </h3>
        <div className='customeInput'>
            <ul className='questionUl'>
                <li >
                    The Price Includes The Following :
                </li>
                <li>1 Initially 2D plans (with 3 partial modifications).
                </li>
                <li>
                2 3D designs up to 10 shouts.
                </li>
                <li>
                3 Materials specification, quantities, and 
                </li>
                <li>
                supplier contact information.
                </li>
            </ul>
            <Input value={formData.price} name="price" className = "questionInput" type='number'  change={onChange}/>
        </div>
        <div className="buttonsContainer">
        </div>
        </div>

        <div className="questionCustom">
        <h3 className='h4Question'>
        The website services Price
        </h3>
        <div className='customeInput'>
            <ul className='questionUl'>
                <li >
                1 Survay works
                </li>
                <li>2 Consulting survices during the design stage
                </li>
            </ul>
            <Input value={formData.webPrice} name="webPrice" className = "questionInput" type='number'  change={onChange}/>
        </div>
        <div className="buttonsContainer">
        </div>
        </div>
        </>
    );
}
export default ThirdPageF