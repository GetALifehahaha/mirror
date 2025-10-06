import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ProductData from '../data/ProductData'

const Cart = () => {

  const [productsCheckout, setProductsCheckout] = useState([]);
  const [grossTotal, setGrossTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [netTotal, setNetTotal] = useState(0);

  const cartData = JSON.parse(localStorage.getItem("cartData"));
  const productMap = Object.fromEntries(ProductData.map(product => [product.id, product]));
  const cartProducts = cartData.map(item => ({...item, ...productMap[item.id]}));

  const discountData = JSON.parse(localStorage.getItem("discountData")) || [];
  
  const navigate = useNavigate();

  const listDiscount = discountData.map(discount => <option key={discount.id} value={discount.discount}>{discount.discount * 100} %</option>)

  const formatNumber = (number) => (number % 1 === 0 ? number + '.00' : number);

  const listCartProducts = cartProducts.map(product => 
    <div key={product.id} className='flex flex-row gap-2 items-center p-4 border-text/10 rounded-sm shadow-sm'>
      <input type='checkbox' onClick={() => handleProductsForCheckout(product)} />
      <img src={product.imagePath} className='h-20 aspect-square p-2 object-contain object-center border-1 rounded-sm border-text/25'/>
      <div className='flex flex-col font-medium text-text gap-2 flex-1 px-4'>
        <h5 onClick={() => navigate(`/products/${product.id}`)} className='cursor-pointer hover:underline hover:underline-offset-2'>{product.productName}</h5>
        
        <div className='flex flex-row gap-2 text-text/50 ml-auto'>
          <h5 className='text-white bg-text/50 px-2 rounded-xs' >PHP {formatNumber(product.productPrice)} </h5>
          <h5 className='px-2 bg-text/10 rounded-xs'>{product.amount} </h5>
        </div>

        <div className='flex flex-row gap-2 items-center mr-auto'>
          <h3 className='text-accent-10 font-semibold text-md rounded-md'>
            PHP {formatNumber(product.productPrice * product.amount)}
          </h3>
        </div>
      </div>
    </div>
  );

  const listProductsForCheckout = productsCheckout.map(product =>
    <tr key={product.id} className='text-right'>
      <td className='text-left font-semibold px-2 truncate'>{product.productName}</td>
      <td className='border-l-2 border-text/10 px-2'>{product.amount}</td>
      <td className='border-l-2 border-text/10 px-2'>{formatNumber(product.productPrice * product.amount)}</td>
    </tr>
  )


  useEffect(() => {
    handleSetGrossTotal();
    handleSetNetTotal();
  }, [productsCheckout, grossTotal, discount])

  const handleSetGrossTotal = () => {
    setGrossTotal(0);

    productsCheckout.forEach(product => setGrossTotal(prevGT => prevGT + product.productPrice * product.amount));

  }

  const handleSetNetTotal = () => {
    setNetTotal(grossTotal - grossTotal * discount)
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

  const handleBuyProducts = () => {
    console.log("U paid " + netTotal)
  }

  return (
    <div className='w-[90vw] rounded-sm bg-white mx-auto p-4 flex flex-row justify-between gap-2 h-[80vh]'>
      {/* Cart */}
      <div className='flex flex-col p-2 rounded-sm shadow-sm flex-1 gap-2 overflow-y-scroll overflow-hidden scrollbar'>
        <h5 className='text-text/25 text-sm font-medium'>Cart Items</h5>
        {listCartProducts}
      </div>

      {/* Checkout */}
      <div className='basis-1/3 rounded-sm shadow-sm p-4 flex flex-col'>
        <h5 className='text-text/25 text-sm font-medium'>Checkout</h5>
        <table className='text-text table-fixed border-collapse'>
          <thead className='font-medium text-right'>
            <tr>
              <th className='text-left w-1/3 px-2'>Items</th>
              <th className='w-1/3 border-l-2 border-text/50 px-2'>Amount</th>
              <th className='w-1/3 border-l-2 border-text/50 px-2'>Price</th>
            </tr>
          </thead>
          <tbody>
            {listProductsForCheckout}
          </tbody>
        </table>
        

        <div className='mt-auto'>
          <h3 className='text-right font-semibold text-text/50'>Gross Total</h3>
          <h5 className='text-right font-bold text-xl'>
            PHP {formatNumber(grossTotal)}
          </h5>
        </div>

        <div className='mt-2'>
          <h3 className='text-right font-semibold text-text/50'>Discount</h3>

          <h5 className='text-right font-bold text-xl'>
            <select onChange={(e) => setDiscount(e.target.value)}>
              <option key={0} value={0}>Discount</option>
              {listDiscount}
            </select>
          </h5>
        </div>

        <div className='mt-2 flex flex-col items-end gap-2'>
          <h3 className='tfont-semibold text-text/50'>Net Total</h3>

          <h5 className=' text-accent-10 font-bold text-2xl'>
            PHP {formatNumber(netTotal)}
          </h5>

          <button 
          className='py-1 px-8 rounded-full bg-accent-10 text-white font-semibold text-lg'
          onClick={handleBuyProducts}>Buy</button>
        </div>
      </div>
    </div>
  );
}

export default Cart