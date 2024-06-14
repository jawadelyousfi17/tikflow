import React from 'react'
import { MdErrorOutline } from "react-icons/md";
import { motion } from "framer-motion";
import Lottie from 'lottie-react';

import AlertAnimation from '@/animations/alert.json'


const ErrorM = ({message}) => {
  return (
    <motion.div
    initial={{ opacity: 0,  scale: 1.05 }}
    animate={{ opacity: 1,  scale: 1 }}
    transition={{ duration: 0.2, ease: "easeInOut" }}
    className=" space-y-4  p-4 rounded-md  er flex  gap-4 items-center font-medium"
  >
       <div>
       <Lottie className='w-10' animationData={AlertAnimation} loop={false} />

        </div>
      {message}
      
  </motion.div>
  )
}

export default ErrorM