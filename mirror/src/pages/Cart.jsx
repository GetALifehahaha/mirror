import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartData } from '../data/CartData'
import ProductData from '../data/ProductData'

const Cart = () => {

  const [productsCheckout, setProductsCheckout] = useState([]);
  const [grossTotal, setGrossTotal] = useState(0);

  const productMap = Object.fromEntries(ProductData.map(product => [product.id, product]));

  const cartProducts = CartData.map(item => ({...item, ...productMap[item.id]}))

  const navigate = useNavigate();

  const listCartProducts = cartProducts.map(product => 
    <div key={product.id} className='flex flex-row gap-2 items-center p-4 border-text/10 rounded-sm shadow-sm'>
      <input type='checkbox' onClick={() => handleProductsForCheckout(product)} />
      <img src={product.imagePath} className='h-20 aspect-square p-2 object-contain object-center border-1 rounded-sm border-text/25'/>
      <div className='flex flex-col font-medium text-text gap-2 flex-1 px-4'>
        <h5 onClick={() => navigate(`/products/${product.id}`)} className='cursor-pointer hover:underline hover:underline-offset-2'>{product.productName}</h5>
        
        <div className='flex flex-row gap-2 text-text/50 ml-auto'>
          <h5 className='text-white bg-text/50 px-2 rounded-xs' >PHP {product.productPrice % 1 === 0 ? product.productPrice + '.00' : product.productPrice} </h5>
          <h5 className='px-2 bg-text/10 rounded-xs'>{product.amount} </h5>
        </div>

        <div className='flex flex-row gap-2 items-center mr-auto'>
          <h3 className='text-accent-10 font-semibold text-md rounded-md'>
            PHP {product.productPrice % 1 === 0 ? product.productPrice * product.amount + '.00' : product.productPrice}
          </h3>
        </div>
      </div>
    </div>
  );

  const listProductsForCheckout = productsCheckout.map(product =>
    <tr key={product.id} className='text-right'>
      <td className='text-left font-semibold px-2'>{product.productName}</td>
      <td className='border-l-2 border-text/10 px-2'>{product.amount}</td>
      <td className='border-l-2 border-text/10 px-2'>{product.productPrice % 1 === 0 ? product.productPrice * product.amount + '.00' : product.productPrice}</td>
    </tr>
  )

  useEffect(() => {
    handleSetGrossTotal();
  }, [productsCheckout])

  const handleSetGrossTotal = () => {
    setGrossTotal(0);

    productsCheckout.forEach(product => setGrossTotal(prevGT => prevGT + product.productPrice * product.amount));
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
        <h5 className='text-text/25 text-sm font-medium'>Cart Items</h5>
        {listCartProducts}
      </div>
    
      <div className='basis-1/4 rounded-sm shadow-sm p-4 flex flex-col'>
        <h5 className='text-text/25 text-sm font-medium'>Checkout</h5>
        <table className='text-text table-fixed border-collapse'>
          <thead className='font-medium text-right'>
            <th className='text-left w-3/5 px-2'>Items</th>
            <th className='w-1/5 border-l-2 border-text/50 px-2'>Amount</th>
            <th className='w-1/5 border-l-2 border-text/50 px-2'>Price</th>
          </thead>
          <tbody>
            {listProductsForCheckout}
          </tbody>
        </table>
        

        <div className='mt-auto'>
          <h3 className='text-right font-semibold text-text/50'>Gross Total</h3>
          <h5 className='text-right font-bold text-xl'>
            PHP {grossTotal % 1 === 0 ? grossTotal + '.00' : grossTotal}
          </h5>
        </div>

        <div className='mt-2'>
          <h3 className='text-right font-semibold text-text/50'>Discount</h3>

          <h5 className='text-right font-bold text-xl'>
            50% Off
          </h5>
        </div>

        <div className='mt-2'>
          <h3 className='text-right font-semibold text-text/50'>Net Total</h3>

          <h5 className='text-right text-accent-10 font-bold text-2xl'>
            PHP {(grossTotal - grossTotal * .50) % 1 === 0 ? (grossTotal - grossTotal * .50) + '.00' : (grossTotal - grossTotal * .50)}
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Cart