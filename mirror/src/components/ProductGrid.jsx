import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductGrid = ({productData}) => {

  const navigate = useNavigate();

  const listProduct = productData.map((product, index) => 
    <div onClick={() => navigate(`/products/${index}`)} key={index} className='basis-1/4 md:basis-1/7 sm:basis-1/5 rounded-md bg-white overflow-hidden'>
      <div className='content-[""] aspect-square bg-white flex justify-center items-center p-2'>
        <img className='rounded-xs' src={`${product.imagePath}`}/>
      </div>
      <div className='p-2 flex flex-col gap-4'>
        <h1 className='truncate'>{product.productName}</h1>
        <h5 className='text-accent-10 font-bold'>PHP {product.productPrice % 1 === 0 ? product.productPrice + '.00' : product.productPrice}</h5>
      </div>
    </div>
  )

  
  return (
    <div className='flex flex-row justify-center flex-wrap gap-2 p-2'>
      {listProduct}
    </div>
  )
}

export default ProductGrid