import React from 'react'

const ProductDetailsPriceCard = ({productDetails}) => {
  return (
    <div className='m-2 p-4 bg-main-60/50 text-accent-10 font-bold text-xl rounded-md'>
        PHP {productDetails.productPrice % 1 === 0 ? productDetails.productPrice + '.00' : productDetails.productPrice}
    </div>
  )
}

export default ProductDetailsPriceCard
