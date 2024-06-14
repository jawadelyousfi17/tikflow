import React from 'react'
import { MdErrorOutline } from "react-icons/md";
import { motion } from "framer-motion";

const ErrorM = ({message}) => {
  return (
    <motion.div
    initial={{ opacity: 0,  scale: 1.05 }}
    animate={{ opacity: 1,  scale: 1 }}
    transition={{ duration: 0.2, ease: "easeInOut" }}
    className=" space-y-4  p-4 rounded-md  er flex  gap-4 items-center font-medium"
  >
       <div> <MdErrorOutline className='' />
        </div>
      {message}
      
  </motion.div>
  )
}

export default ErrorM