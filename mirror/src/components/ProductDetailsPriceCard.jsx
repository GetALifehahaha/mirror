import React from 'react'

const ProductDetailsPriceCard = ({productDetails}) => {
  return (
    <div className='bg-main-60-light text-accent-10 shadow-sm px-4 py-2 font-bold text-xl rounded-md'>
      <h5 className='text-text/50 text-sm font-medium'>Price</h5>
      <h5>PHP {productDetails.productPrice % 1 === 0 ? productDetails.productPrice + '.00' : productDetails.productPrice}</h5>
    </div>
  )
}

export default ProductDetailsPriceCard
