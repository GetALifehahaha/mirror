import React from 'react'
import {motion} from 'framer-motion'

const NotificationPopup = ({message}) => {
  return (
    <motion.div 
    initial={{y: -20, opacity: 0}}
    animate={{y: 0, opacity: 1}}
    exit={{y:-20, opacity: 0}}
    transition={{ease: 'easeIn'}}
    className='bg-main-60 px-10 pt-4 py-1 rounded-b-xl absolute top-0 left-1/2 -translate-x-1/2 text-sm font-semibold text-text shadow-sm'>
            {message}
    </motion.div>
  )
}

export default NotificationPopup
