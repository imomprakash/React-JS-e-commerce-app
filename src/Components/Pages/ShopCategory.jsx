import React, { useContext } from 'react'

import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import Dropdown_img from '../Assets/Dropdown-img.png'
import Item from '../Item/Item'

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className='shop-category'>
      <img className='Banner-image' src={props.banner} alt="" />
      <div className="Shopcategory-indexSort">
        <p>
          <span>Showing 1-12 </span> out of 28 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={Dropdown_img} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item,i)=>{
          if(props.category===item.category){
           return<Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          }
          else{
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>

    </div>
  )
}

export default ShopCategory
