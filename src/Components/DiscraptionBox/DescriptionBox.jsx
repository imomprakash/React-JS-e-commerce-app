import React from 'react'

import './DescriptionBox.css'

const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Review(448)</div>
            </div>
            <div className="descriptionbox-description">
             <p>A detailed description of the product makes the shopper's decision to make the purchase easier. It also decreases the number of unsatisfied buyers as a result of unmatched expectations concerning of product's description and the product itself.</p>
             <p>Tell shoppers how they will benefit from the product as well as what features it has. Remember that people don't just buy a product, they buy a solution to their problems.</p>
            </div>

        </div>
    )
}

export default DescriptionBox

