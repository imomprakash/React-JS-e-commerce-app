import React from 'react'

import './Offer.css'
import Exclusive_img from '../Assets/Exclusive-img.webp'
const Offer = () => {
    return (
        <div className='offer'>
            <div className="offer-left">
                <h1>Exclusive</h1>
                <h1>Offer For You</h1>
                <p>ONLY ON BEST SELLERS PRODUCTS</p>
                <button>Check Now</button>

            </div>
            <div className="offer-right">
           <img src={Exclusive_img} alt="" />
            </div>
        </div>
    )
}

export default Offer
