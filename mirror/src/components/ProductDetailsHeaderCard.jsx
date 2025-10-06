import React from 'react'

const ProductDetailsHeaderCard = ({productDetails}) => {
  return (
    <div>
        <h3 className='text-2xl font-bold p-2'>{productDetails.productName}</h3>

        <div className='flex flex-row gap-4 text-text/75 font-medium'>
            <h5>Stars: {productDetails.rating}</h5>
            <h5>Ratings: {productDetails.ratingCount}</h5>
            <h5>Sold: {productDetails.sold}</h5>
        </div>
    </div>
  )
}

export default ProductDetailsHeaderCard
