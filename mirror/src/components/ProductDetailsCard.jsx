import React from 'react'

const SimpleProductDetails = ({productDetails}) => {
    return (
        <div className='font-medium text-text/50 flex flex-col gap-2'>
            <span className='flex gap-1'>Name: <h3 className='text-text font-semibold'>{productDetails.productName}</h3></span>

            <div className='flex flex-col md:flex-row gap-2 md:gap-4'>
                <span className='flex gap-1'>Price: <h3 className='text-text font-semibold'>PHP {productDetails.productPrice % 1 === 0 ? productDetails.productPrice + '.00' : productDetails.productPrice}</h3></span>
                <span className='flex gap-1'>Category: <h3 className='text-text font-semibold'>{productDetails.category}</h3></span>
            </div>
        </div>
    )
}

export default SimpleProductDetails
