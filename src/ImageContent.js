import React from 'react';
import img from './Images/1.00141963.png'
import img2 from './Images/4.16ba0907.png'
import img3 from './Images/pexels-emma-bauso-2253835.jpg'
import img4 from './Images/2.a4899794.png'
import img5 from './Images/5.ee1c89f9.png'
import {AiOutlineArrowRight} from 'react-icons/ai'
import { NavLink } from 'react-router-dom';
const ImageContent = () => {
    
    return (
        <div className='ImageContent-container'>
            <div className='images-parent'>
            <img src={img} alt="Makeup-img" className='img-1'/>
            <img src={img3} alt="Makeup-img" className='img-2'/>
            <img src={img2} alt="Makeup-img" className='img-3'/>
            <img src={img4} alt="Makeup-img" className='img-4'/>
            <img src={img5} alt="Makeup-img" className='img-5'/>
            </div>
            <NavLink to="/categories" className="navLink">
            <p className='show-categories'>SHOW CATEGORIES <AiOutlineArrowRight className='arrow-icon'/></p>
            </NavLink>
        </div>
    );
}

export default ImageContent;
