import React from 'react'
import {motion} from 'framer-motion'

const NotificationPopup = ({message}) => {
  return (
    <motion.div 
    initial={{x: -20, opacity: 0}}
    animate={{x: 0, opacity: 1}}
    exit={{x: 20, opacity: 0}}
    className='bg-main-60 px-10 py-1 rounded-full absolute top-10 left-1/2 -translate-x-1/2 text-sm font-semibold text-text shadow-sm'>
            {message}
    </motion.div>
  )
}

export default NotificationPopup
