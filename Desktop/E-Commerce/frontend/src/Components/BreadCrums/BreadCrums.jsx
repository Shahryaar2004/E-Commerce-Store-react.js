import React from 'react';
import './BreadCrums.css';
import arrow_icon from '../Assets/breadcrum_arrow.png';

const BreadCrums = (props) => {
    const { product } = props;
  
    return (
        <div className='breadcrum'>
            HOME <img src={arrow_icon} alt="arrow" /> SHOP <img src={arrow_icon} alt="arrow" /> {product.category} <img src={arrow_icon} alt="arrow" /> {product.name}
        </div>
    );
};

export default BreadCrums;
