import React from 'react';
import { Link } from 'react-router-dom';

function Pcmenu(){
    return(
        <ul className='menu justify-content-center mb-0'>
        <li>
            <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/services/' >Services</Link>
        </li>
        <li>
          <Link to='/about/' >About</Link>
        </li>
        <li>
          <Link to='/contact/' >Contact</Link>
        </li>
    </ul>
    );
}
export default Pcmenu