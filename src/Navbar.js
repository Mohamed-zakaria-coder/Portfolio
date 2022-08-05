import React from 'react';
import {BiWorld} from 'react-icons/bi'
const Navbar = () => {
    return (
        <div className='navbar'>
          <BiWorld  className='world-icon'/> <span className='head-span'>My Travel Journal</span> 
        </div>
    );
}

export default Navbar;
