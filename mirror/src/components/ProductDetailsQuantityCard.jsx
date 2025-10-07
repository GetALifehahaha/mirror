import React from 'react'

const ProductDetailsQuantityCard = ({productDetails}) => {
  return (
    <div className='p-4 text-text flex flex-row gap-1'>
        <h3 className='text-md text-text/50 mr-10'>Available</h3>
        There are <h3 className={`font-medium ${productDetails.available > 10 ? 'text-accent-10' : 'text-red-500'}`}>{productDetails.available}</h3> units left.

    </div>
  )
}

export default ProductDetailsQuantityCard
