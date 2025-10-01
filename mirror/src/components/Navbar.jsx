import React from 'react'
import {NavLink} from 'react-router-dom'
import { MdDataset } from "react-icons/md";

const Navbar = () => {
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
              className={({ isActive }) => isActive ? "text-accent-10 font-semibold" : "text-text"}> 
            Cart</NavLink>
        </div>
    </div>
  )
}

export default Navbar