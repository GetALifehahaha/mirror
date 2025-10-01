import React from 'react'

const ProductGrid = ({productData}) => {

  const listProduct = productData.map((product, index) => 
    <div key={index} className='basis-1/3 sm:basis-1/6 rounded-md bg-white'>
      <div className='content-[""] aspect-square bg-block-30'>
        {/* sub for image */}
      </div>
      <div className='max-w-[15vw] p-2 flex flex-col gap-4'>
        <h1 className='truncate'>{product.productName}</h1>
        <h5 className='text-accent-10 font-bold'>PHP {product.productPrice % 1 === 0 ? product.productPrice + '.00' : product.productPrice}</h5>
      </div>
    </div>
  )

  
  return (
    <div className='flex flex-row justify-center flex-wrap px-10 gap-4 mx-auto'>
      {listProduct}
    </div>
  )
}

export default ProductGrid