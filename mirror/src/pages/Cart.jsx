import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartData } from '../data/CartData'

const Cart = () => {

  const [productsCheckout, setProductsCheckout] = useState([]);
  const [grossTotal, setGrossTotal] = useState(0);

  const navigate = useNavigate();

  const listCartProducts = CartData.map(product => 
    <div key={product.id} className='flex flex-row gap-2 p-4 border-text/10 rounded-sm shadow-sm'>
      <input type='checkbox' onClick={() => handleProductsForCheckout(product)} />
      <div className='flex flex-col font-medium text-text gap-2 flex-1 px-4'>
        <h5 onClick={() => navigate(`/products/${product.id}`)} className='cursor-pointer hover:underline hover:underline-offset-2'>{product.productName}</h5>
        
        <div className='flex flex-row gap-2 text-text/50 ml-auto'>
          <h5 className='text-white bg-text/50 px-2 rounded-xs' >PHP {product.productPrice} </h5>
          <h5 className='px-2 bg-text/10 rounded-xs'>{product.amount} </h5>
        </div>

        <div className='flex flex-row gap-2 items-center mr-auto'>
          <h3 className='text-accent-10 font-semibold text-xl px-4 py-1 rounded-md'>
            PHP {product.productPrice * product.amount}
          </h3>
        </div>
      </div>
    </div>
  );

  const listProductsForCheckout = productsCheckout.map(product =>
    <div key={product.id}>
      <h5>{product.productName} : </h5>
      <h5>{product.productPrice}</h5>
    </div>
  )

  useEffect(() => {
    handleSetGrossTotal();
  }, [productsCheckout])

  const handleSetGrossTotal = () => {
    setGrossTotal(0);

    productsCheckout.forEach(product => setGrossTotal(prevGT => prevGT + product.productPrice));
  }

  const handleProductsForCheckout = (product) => {

    setProductsCheckout(pc => {
      const productInCheckout = pc.some(p => p.id === product.id);

      if (productInCheckout) {
        return pc.filter(p => p.id !== product.id);
      } else {
        return [...pc, product];
      }
    });
  } 

  return (
    <div className='w-[90vw] rounded-sm bg-white mx-auto p-4 flex flex-row justify-between gap-2'>
      <div className='flex flex-col p-2 rounded-sm shadow-sm flex-1 gap-2'>
        {listCartProducts}
      </div>
    
      <div className='basis-1/4 rounded-sm shadow-sm p-2'>
        {listProductsForCheckout}
        {grossTotal}
      </div>
    </div>
  );
}

export default Cart