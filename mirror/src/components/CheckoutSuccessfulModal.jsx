import React from 'react'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom';

const CheckoutSuccessfulModal = ({totalAmount, onCloseCart}) => {

    const date = new Date();
    const orderId = `${date.getMonth() + 1}-${date.getDay()}-${date.getFullYear()}-${date.getSeconds()}`

    return ( 
        <motion.div 
        initial={{
            opacity: 0
        }}
        animate={{
            opacity: 1
        }}
        exit={{
            opacity: 0
        }}
        className='absolute top-0 left-0 w-full h-[100vh] flex justify-center items-center bg-block-30/10 backdrop-blur-md overflow-hidden'>
            <motion.div
            initial={{y: -20}}
            animate={{y: 0}}
            exit={{y: -20}}
            className='bg-main-60 p-6 rounded-lg shadow-md text-text font-medium
                    flex flex-col gap-8 
            '
            >
                <h1 className='text-center font-bold text-2xl tracking-tight'>Thank you for your purchase!</h1>

                <div className='text-center'>
                    <p>Your order has been placed succesfully.</p>
                    <p>We've sent your receipt and order details to your email.</p>
                </div>

                <div className='p-4 rounded-md text-text text-center bg-main-60-light shadow-md'>
                    <h5 className='font-semibold text-text/50'>{orderId}</h5>

                    <h5 className='text-text/50 mt-4 -mb-2'>Total</h5>
                    <h1 className='text-accent-10-dark text-4xl font-bold tracking-tight'>₱ {totalAmount}</h1>
                </div>

                <div className='text-center'>
                    <h5 className='text-text/75'>What would you like to do next?</h5>

                    <div className='flex flex-row gap-2 justify-center'>
                        <button onClick={onCloseCart} className='cursor-pointer text-text/75 hover:text-text bg-main-60-light rounded-xs shadow-xs flex-1'>View Cart</button>
                        <Link to={'/products'} className='cursor-pointer text-text/75 hover:text-text bg-main-60-light rounded-xs shadow-xs flex-1'>Continue Shopping</Link>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default CheckoutSuccessfulModal
