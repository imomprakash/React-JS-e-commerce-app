import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcums from '../Breadcums/Breadcums'
import ProductDisplay from '../ProductDisplay/ProductDisplay'
import DescriptionBox from '../DiscraptionBox/DescriptionBox'
import RelatedProduct from '../RelatedProduct/RelatedProduct'

const Product = () => {
  const {all_product} = useContext(ShopContext)
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id === Number(productId));
  return (
    <div>
      <Breadcums product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RelatedProduct/>
    </div>
  )
}

export default Product
