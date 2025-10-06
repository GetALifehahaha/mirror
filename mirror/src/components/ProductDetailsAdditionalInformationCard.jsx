import React from 'react'

const ProductDetailsAdditionalInformationCard = ({productDetails}) => {
  return (
    <div className='bg-white p-2 flex flex-col gap-4 rounded-md'>
        <div className='flex flex-row gap-1'>
            <h3 className='text-text/50'>Category: </h3>

            <h5 className='text-text font-medium'>{productDetails.category}</h5>
        </div>

        <div className='flex flex-row gap-1'>
            <h3 className='text-text/50'>Seller: </h3>

            <h5 className='text-text font-medium'>{productDetails.shipsFrom}</h5>
        </div>
    </div>
  )
}

export default ProductDetailsAdditionalInformationCard
