import React from 'react'
import {Link} from 'react-router-dom'
import { MdOutlineCall, MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className='flex flex-col mt-40 w-full bg-main-60 shadow-sm pt-8'>
        {/* About */}
        <div className='flex flex-col md:flex-row px-8 py-4 justify-evenly gap-4 md:gap-8 text-text/75 text-sm font-medium sm:text-md'>
            <div className='flex flex-col md:flex-row gap-4'>
                {/* The Website */}
                <div className='flex flex-col gap-2 flex-1 text-justify'>
                    <h5 className='font-semibold text-xl'>Mirror</h5>

                    <h5>Welcome to Mirror, your all-in-one online marketplace. 
                        We bring together a wide range of products — from everyday essentials to trending finds — all at your fingertips. 
                        Shop with ease, enjoy secure checkout, and get your orders delivered straight to your door.
                        </h5>
                </div>

                {/* The Developers */}
                <div className='flex flex-col gap-2 flex-1 text-justify'>
                    <h5 className='font-semibold text-xl'>EFIXXO</h5>

                    <h5>From streamlining workflows to modernizing traditional methods, 
                        our solutions aim to bring simplicity and efficiency to everyday tasks. 
                        Whether it is helping businesses shift to digital tools or building apps that make life easier, 
                        we at EFIXXO focus on creating practical, reliable, and user-friendly tech.</h5>
                </div>
            </div>

            {/* Developer Information */}
            <div className='flex-[0.75] flex flex-row md:flex-col gap-2'>
                <div>
                    <h5 className='font-semibold text-lg'>Contact Us</h5>
                    <span className='flex flex-row gap-2 items-center'><MdOutlineCall /><h5>0987-654-321</h5></span>
                    <span className='flex flex-row gap-2 items-center'><MdOutlineEmail /><h5>jam081425@gmail.com</h5></span>
                </div>
                <Link to={'/about'} className='font-semibold text-lg'>About Us</Link>
            </div>
        </div>

        {/* Basic Information */}
        <div className='flex flex-row px-8 py-4 text-sm justify-between border-t-2 border-block-30/10 text-text/75'>
            <h5>© 2025 Mirror. All Rights Reserved.</h5>

            <span className='flex flex-row gap-2'>
                <h5 className='hidden md:block'>Country & Region: </h5>
                <h5 className=''>Philippines</h5>
                <h5 className='hidden md:block'>Japan</h5>
                <h5 className='hidden md:block'>China</h5>
                <h5 className='hidden md:block'>South Korea</h5>
            </span>
        </div>
    </div>
  )
}

export default Footer