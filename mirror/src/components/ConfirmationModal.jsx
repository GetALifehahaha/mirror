import React from 'react'
import {motion} from 'framer-motion'

const ConfirmationModal = ({message, onChoiceClick}) => {
  return (
    <motion.div 
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    className='absolute left-0 top-0 w-full h-[100vh] gap-8 bg-text/10 flex justify-center items-end py-10 backdrop-blur-xs'>
        <motion.div 
        initial={{x: -20}}
        animate={{x: 0}}
        exit={{x: 20}}
        className='bg-main-60 px-10 py-6 rounded-sm'>
                {message}
                <div className='flex flex-row items-center justify-between'>
                    <button className='text-green-500 cursor-pointer' onClick={() => onChoiceClick(false)}>Cancel</button>
                    <button className='text-red-400 cursor-pointer' onClick={() => onChoiceClick(true)}>Remove</button>
                </div>
        </motion.div>
    </motion.div>
  )
}

export default ConfirmationModal
