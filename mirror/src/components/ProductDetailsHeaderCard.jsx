import React from 'react'
import { FaRegStar } from "react-icons/fa";

const ProductDetailsHeaderCard = ({productDetails}) => {
  return (
    <div className='flex flex-col gap-2 text-text'>
        <h3 className='text-2xl font-bold px-4 py-1 rounded-md shadow-sm bg-main-60-light'>{productDetails.productName}</h3>

        <div className='flex flex-row gap-4 text-text/75 font-medium px-4 w-fit'>
            <span className='flex flex-row gap-2 items-center'><h5>{productDetails.rating}</h5><FaRegStar /></span>
            <h5>Ratings: {productDetails.ratingCount}</h5>
            <h5>Sold: {productDetails.sold}</h5>
        </div>
    </div>
  )
}

export default ProductDetailsHeaderCard
