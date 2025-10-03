import React, {useState, useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import { MdDataset } from "react-icons/md";

const Navbar = () => {

  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    setCartCount(JSON.parse(localStorage.getItem("cartData")).length);
  }, []);
  

  return (
    <div className='flex flex-row justify-between px-8 py-4'>
      <span className='flex items-center '>
        <MdDataset />
        <h5>Mirror</h5>
      </span>

        <div className='flex flex-row gap-4 items-center'>
            <NavLink
              to={'/products'}
              className={({ isActive }) => isActive ? "text-accent-10 font-semibold" : "text-text"}> 
            Home</NavLink>
            <NavLink
              to={'/cart'}
              className={({ isActive }) => `flex flex-row gap-2 items-center ${isActive ? "text-accent-10 font-semibold" : "text-text"}`}> 
            Cart <h3 className='aspect-square w-8 rounded-sm bg-accent-10 flex justify-center items-center text-white font-medium'>{cartCount}</h3></NavLink>
        </div>
    </div>
  )
}

export default Navbar