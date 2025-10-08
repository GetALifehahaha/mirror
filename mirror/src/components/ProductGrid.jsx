import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaRegStar } from "react-icons/fa";
import {motion} from 'framer-motion'

const ProductGrid = ({productData}) => {

  const navigate = useNavigate();

  const listProduct = productData.map((product, index) => 
    <motion.div 
    layout
    initial={{y: 10, opacity: 0}}
    animate={{y: 0, opacity: 1}}
    transition={{ease: 'easeIn'}}
    whileHover={{y: -5, transition: {duration: 0.2}}}
    onClick={() => navigate(`/products/${index}`)} key={index} className='rounded-md text-text bg-main-60 overflow-hidden cursor-pointer shadow-lg'>
      <div className='content-[""] aspect-square bg-main-60-light flex justify-center items-center p-2 shadow-sm'>
        <img className='rounded-xs' src={`${product.imagePath}`}/>
      </div>
      <div className='p-2 flex flex-col gap-4'>
        <div className='flex flex-row px-2 py-1 justify-between'>
          <h1 className='truncate font-semibold tracking-wide'>{product.productName}</h1>
          <span className='font-medium tracking-wide flex flex-row gap-1 items-center'><h1>{product.rating}</h1> <FaRegStar /></span>
        </div>
        <h5 className='text-accent-10 font-bold px-2 py-1 rounded-md bg-main-60-light shadow-sm'>₱ {Number(product.productPrice || 0).toLocaleString('en-PH', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</h5>
      </div>
    </motion.div>
  )

  
  return (
    <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 py-4 w-[90vw] mx-auto'>
      {listProduct}
    </div>
  )
}

export default ProductGrid