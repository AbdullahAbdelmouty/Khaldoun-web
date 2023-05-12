import React from "react";
import './CopyWrite.css';
import {BiCopyright} from 'react-icons/bi'
function CopyWrite(){
    return(
        <div className="copyWrite">
            <BiCopyright />
        <p>
            All Right Reserved
        </p>
        </div>
    );
}
export default CopyWrite;