import React from 'react'
import {motion} from 'framer-motion'

const ConfirmationModal = ({message, onChoiceClick}) => {
  return (
    <motion.div 
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    className='absolute left-0 top-0 w-full h-[100vh] gap-8 bg-text/10 overflow-hidden flex justify-center'>
        <motion.div 
        initial={{y: -20}}
        animate={{y: 0}}
        exit={{y: -20}}
        transition={{ease: 'easeIn'}}
        className='bg-main-60 px-10 py-6 rounded-b-xl w-fit h-fit'>
                {message}
                <div className='flex flex-row items-center justify-center gap-4'>
                    <button className='font-medium text-text cursor-pointer' onClick={() => onChoiceClick(false)}>Cancel</button>
                    <button className='font-medium text-red-400 cursor-pointer' onClick={() => onChoiceClick(true)}>Remove</button>
                </div>
        </motion.div>
    </motion.div>
  )
}

export default ConfirmationModal
