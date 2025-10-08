import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ProductData from '../data/ProductData'
import { MdHorizontalRule, MdAdd, MdAir } from 'react-icons/md'
import {motion, AnimatePresence} from 'framer-motion'
import { ConfirmationModal, NotificationPopup } from '../components'

const Cart = () => {

  const [productsCheckout, setProductsCheckout] = useState([]);
  const [grossTotal, setGrossTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [netTotal, setNetTotal] = useState(0);
  const [removeProductId, setRemoveProductId] = useState(-1);
  const [notificationMessage, setNotificationMessage] = useState("");

  const [isExpandedCheckout, setIsExpandedCheckout] = useState(false);
  const [isRemoveModalShown, setRemoveIsModalShown] = useState(false);
  const [isNotificationPopupShown, setIsNotificationPopupShown] = useState(false);

  const [rerender, setRerender] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);

  const cartData = JSON.parse(localStorage.getItem("cartData"));
  const productMap = Object.fromEntries(ProductData.map(product => [product.id, product]));
  const cartProducts = cartData.map(item => ({...item, ...productMap[item.id]}));

  const discountData = JSON.parse(localStorage.getItem("discountData")) || [];
  
  const navigate = useNavigate();

  const listDiscount = discountData.map((discount, index) => <option key={index} value={discount.discount}>{discount.discount * 100} %</option>)

  const formatNumber = (number) => (number % 1 === 0 ? number + '.00' : number);

  const listCartProducts = cartProducts.map((product, index) => 
    <div key={product.id} className='flex flex-row gap-4 p-4 items-center bg-main-60-light border-text/10 rounded-md shadow-sm'>
      <div className='flex flex-col gap-4'>
        <MdAdd className='text-accent-10-dark cursor-pointer' onClick={() => handleProductsForCheckout(product)} />
        <MdHorizontalRule className='text-red-400 cursor-pointer' onClick={() => handleSetRemoveProductId(product.id)}/>
      </div>
      <img src={product.imagePath} className='h-18 md:h-24 aspect-square object-contain object-center border-1 rounded-sm border-text/25'/>

      <div className='flex flex-col text-sm md:text-md text-text gap-1 md:gap-2 flex-1 px-4'>
        <h5 onClick={() => navigate(`/products/${product.id}`)} className='text-right md:text-left text-lg md:text-xl font-semibold cursor-pointer'>{product.productName}</h5>
        
        <div className='flex flex-row gap-2 ml-auto'>
          <h5 className='text-text font-semibold' >PHP {formatNumber(product.productPrice)} </h5>
          <h5 className='text-text/75'>x{product.amount} </h5>
        </div>

        <div className='flex flex-row gap-2 items-center ml-auto'>
          <h3 className='text-text/50 font-medium'>Total</h3>
          <h3 className='text-accent-10 font-bold text-lg rounded-md'>
            PHP {formatNumber(product.productPrice * product.amount)}
          </h3>
        </div>
      </div>
    </div>
  );

  const listProductsForCheckout = productsCheckout.map((product) =>
    <div key={product.id} className='flex px-2 py-4 bg-main-60-light rounded-md shadow-sm font-medium items-center'>
      <MdHorizontalRule className='text-red-400 cursor-pointer mr-4' onClick={() => removeFromCheckout(product.id)}/>
      <h5 className='basis-1/3 truncate'>{product.productName}</h5>
      <h5 className='basis-1/3 flex justify-end'>{product.amount}</h5>
      <h5 className='basis-1/3 flex justify-end'>{formatNumber(product.productPrice * product.amount)}</h5>
    </div>
  )

  useEffect(() => {
    handleSetGrossTotal();
    handleSetNetTotal();
  }, [productsCheckout, grossTotal, discount]);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  
  const removeFromCart = (accept) => {
    if (removeProductId == -1) return;

    if (accept) {
      const filteredCartData = cartData.filter(product => product.id != removeProductId)
      
      localStorage.setItem('cartData', JSON.stringify(filteredCartData));
  
      setRerender(rerender + 1);
    }

    setRemoveProductId(-1);

    handleNotificationPopup("Item removed from cart.");
  }

  const removeFromCheckout = (id) => {
      setProductsCheckout(productsCheckout.filter(product => product.id != id));
  }

  const handleSetRemoveProductId = (id) => {
    setRemoveProductId(id);
    setRemoveIsModalShown(true);
  }

  const handleSetGrossTotal = () => {
    setGrossTotal(0);

    productsCheckout.forEach(product => setGrossTotal(prevGT => prevGT + product.productPrice * product.amount));

  }

  const handleSetNetTotal = () => {
    setNetTotal(grossTotal - grossTotal * discount);
  }

  const handleProductsForCheckout = (product) => {

    setProductsCheckout(pc => {
      const productInCheckout = pc.some(p => p.id === product.id);

      if (!productInCheckout) {
        return [...pc, product];
      }

      return pc;
    });
  } 

  const handleBuyProducts = () => {
    handleNotificationPopup("Transaction Successful");
  }
  
  const handleRemoveCartProduct = (accept) => {
    setRemoveIsModalShown(false);
    
    removeFromCart(accept);
  }

  const handleNotificationPopup = (message) => {
    setNotificationMessage(message);

    setIsNotificationPopupShown(true);

    setTimeout(() => {
      setIsNotificationPopupShown(false);
    },  3000);
  }

  return (
    <div className='w-[90vw] rounded-md bg-main-60 mx-auto p-4 flex flex-row justify-between gap-2 min-h-[60vh] md:max-h-[80vh]'>
      {/* Cart */}
      <div className='flex flex-col px-4 flex-1 gap-4 overflow-y-scroll scrollbar'>
        {listCartProducts}
      </div>

      {/* Checkout */}
      <motion.div 
      className={`basis-1/3 px-4 flex flex-col absolute scrollbar
                bg-main-60 bottom-0 left-0 w-full rounded-t-lg outline-1 outline-text/25 py-4 ${(isExpandedCheckout) ? 'h-[80vh]' : 'h-fit'}
                  md:relative md:overflow-auto md:h-auto md:outline-none`}>
        <h5 className='text-text/50 text-md font-medium mb-8'>Checkout</h5>
        { (width < 768 ) &&
            <button 
            onClick={() => setIsExpandedCheckout(!isExpandedCheckout)}
            className={`absolute left-1/2 px-4 py-1 rounded-full bg-accent-10 font-medium text-main-60-light -top-4 -translate-x-1/2`}>
              { (isExpandedCheckout) ? 'Retract' : 'Expand'}
            </button>

        }
        { (isExpandedCheckout || width >= 768) &&
            <AnimatePresence>
            {(isExpandedCheckout || width >= 768) && (
              <motion.div
                className='flex flex-col h-full'
              >
                <div className='flex flex-row font-medium text-text/50'>
                  <h3 className='basis-1/3'>Item</h3>
                  <h3 className='basis-1/3 flex justify-end'>Amount</h3>
                  <h3 className='basis-1/3 flex justify-end'>Price</h3>
                </div>

                <div className='flex flex-col gap-4 py-4'>
                  {listProductsForCheckout}
                </div>

                <div className='mt-auto flex flex-row justify-between border-t-2 border-text/25 py-2'>
                  <div className=''>
                    <h3 className='text-left font-semibold text-text/50'>Discount</h3>

                    <h5 className='text-right font-bold text-md px-4 py-1 rounded-md shadow-sm bg-main-60-light'>
                      <select onChange={(e) => setDiscount(e.target.value)}>
                        <option key="default" value={0}>Discount</option>
                        {listDiscount}
                      </select>
                    </h5>
                  </div>

                  <div className=''>
                    <h3 className='text-right font-semibold text-text/50'>Gross Total</h3>
                    <h5 className='text-right font-bold text-md px-4 py-1 rounded-md shadow-sm bg-main-60-light'>
                      {formatNumber(grossTotal)}
                    </h5>
                  </div>
                </div>
                
              </motion.div>
            )}
            </AnimatePresence>
        }
        

        <div className='mt-2 flex flex-row justify-between items-center gap-2 bg-accent-10 rounded-lg shadow-md p-4'>
          <h3 className='font-semibold text-main-60-dark'>Net Total</h3>

          <h5 className=' text-main-60-light font-bold text-2xl'>
            PHP {formatNumber(netTotal)}
          </h5>
        </div>
        <button 
        className='my-2 mx-auto py-1 px-8 w-fit rounded-full bg-accent-10 text-white font-semibold text-lg'
        onClick={handleBuyProducts}>Proceed to Checkout</button>
        </motion.div>
        
        <AnimatePresence>
        {isRemoveModalShown &&
          <ConfirmationModal 
          message={"Are you sure you want to remove this product from your cart?"} onChoiceClick={handleRemoveCartProduct} />
        }
        </AnimatePresence>

        <AnimatePresence>
        {isNotificationPopupShown && 
          <NotificationPopup message={notificationMessage} />
        }
        </AnimatePresence>
    </div>
  );
}

export default Cart