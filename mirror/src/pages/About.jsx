import React from 'react'
import {motion, stagger} from 'framer-motion'

const About = () => {

    const variants = {
        initial: {
            opacity: 0,
            x: 10
        },
        show: {
            opacity: 1,
            x: 0,
        }
    }
    
  return (
    <motion.div 
    variants={{
        initial: {
            opacity: 0,
            y: 10
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                delayChildren: stagger(1),
                duration: 1
            }
        }
    }}
    initial="initial"
    animate="show"
    className='text-text font-medium w-[90vw] flex flex-col gap-8 items-center px-8 py-12 rounded-md shadow-sm bg-main-60 mx-auto'>
        <motion.h1 
        variants={variants}
        className='text-4xl font-semibold tracking-tight'>Mirror</motion.h1>

        <motion.div 
        variants={{
            initial: {
            opacity: 0,
            x: 10
            },
            show: {
                opacity: 1,
                x: 0,
                transition: {
                    delayChildren: stagger(0.25),
                    duration: 1
                }
            }
        }}
        initial="initial"
        animate="show"
        className='flex flex-row gap-4 justify-center'>
            <motion.div
            variants={variants}
            className='flex flex-col gap-2 items-center bg-main-60-light rounded-md shadow-sm p-8 w-1/4 '>
                <h3 className='text-xl font-bold'>About Us</h3>
                <p>Welcome to Mirror, your one-stop shop for quality products at affordable prices. We are passionate about providing our customers with the best online shopping experience - combininng convenience, reliability, and top-notch service.</p>
            </motion.div>
            <motion.div 
            variants={variants}
            className='flex flex-col gap-2 items-center bg-main-60-light rounded-md shadow-sm p-8 w-1/4 '>
                <h3 className='text-xl font-bold'>Our Mission</h3>
                <p>To make shopping simple, enjoyable, and accessible for everyone. We aim to bring you a carefully curated selection of products that fit your lifestyle and budget.</p>
            </motion.div>
            <motion.div 
            variants={variants}
            className='flex flex-col gap-2 items-center bg-main-60-light rounded-md shadow-sm p-8 w-1/4 '>
                <h3 className='text-xl font-bold'>Our Vision</h3>
                <p>To become a trusted online destination where customers can find everything they need - from everyday essentials to unique finds - all in one place.</p>
            </motion.div>

            <motion.div 
            variants={variants}
            className='flex flex-col gap-2 items-center bg-main-60-light rounded-md shadow-sm p-8 w-1/4 '>
                <h3 className='text-xl font-bold'>Our Commitment</h3>
                <div>
                    <h3><strong>Quality Products</strong>: Every item we offer is handpicked for its quality and value</h3>
                    <h3><strong>Secure Shopping</strong>: Your privacy and security are our top priorities</h3>
                    <h3><strong>Customer Satisfaction</strong>: We're always here to help - your happiness matters to us</h3>
                </div>
            </motion.div>

            <motion.div 
            variants={variants}
            className='flex flex-col gap-2 items-center bg-main-60-light rounded-md shadow-sm p-8 w-1/4 '>
                <h3 className='text-xl font-bold'>What We Offer</h3>

                <div className='font-semibold text-center'>
                    <h5>Fashion & Apparel</h5>
                    <h5>Gadgets & Accessories</h5>
                    <h5>Home Essentials</h5>
                    <h5>Beauty & Personal Care</h5>
                    <h5>... and much more!</h5>
                </div>
            </motion.div>
        </motion.div>


    </motion.div>
  )
}

export default About
