import React from 'react';
import {FaPizzaSlice} from 'react-icons/fa'
import {AiOutlineHome} from 'react-icons/ai'
import {FcSalesPerformance} from 'react-icons/fc'
import { NavLink } from 'react-router-dom';
const Nav = () => {
  return (
    <div className='parent'>
        <div className='nav-container'>
      <FaPizzaSlice className='nav-icon'/>
      <NavLink to="/Home" className='home-container'>
        <AiOutlineHome className='home-icon'/>
        <div> Menu</div>
      </NavLink>
      <NavLink to="/Sales" className='sales-container'>
        <FcSalesPerformance className='sales-icon'/>
        <div >Sales</div>
      </NavLink>
      </div>
    </div>
  );
}

export default Nav;
