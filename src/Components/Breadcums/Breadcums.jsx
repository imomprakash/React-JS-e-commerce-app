import React from 'react'

import './Breadcums.css'
import Arrow_icon from '../Assets/Arrow-icon.png'

const Breadcums = (props) => {
    const { product } = props;
    return (
        <div className='breadcrum'>
            Home <img src={Arrow_icon} alt="" /> SHOP <img src={Arrow_icon} alt="" /> {product.category} <img src={Arrow_icon} alt="" /> {product.name} 

        </div>
    )
}

export default Breadcums
