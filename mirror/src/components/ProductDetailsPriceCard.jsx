import React from 'react'

const ProductDetailsPriceCard = ({productDetails}) => {
  return (
    <div className='bg-main-60-light text-accent-10 shadow-sm px-4 py-2 font-bold text-xl rounded-md'>
      <h5 className='text-text/50 text-sm font-medium'>Price</h5>
      <h5>₱ {Number(productDetails.productPrice || 0).toLocaleString('en-PH', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</h5>
    </div>
  )
}

export default ProductDetailsPriceCard
