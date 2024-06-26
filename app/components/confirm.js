import React, { useEffect, useRef, useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { IoTimeSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import { AiFillDollarCircle } from "react-icons/ai";
import { FaDollarSign } from "react-icons/fa6";
import { FiLink } from "react-icons/fi";
import { MdAlternateEmail } from "react-icons/md";
import Lottie from 'lottie-react';

import CheckAnimation from '@/animations/check.json'

const Confirm = ({data}) => {
    const [loading  , setloading ]=  useState(false)
    const [play , setPlay] = useState(false)
    const sectionRef = useRef(null);

function confirm() {
    setloading(true)
    console.log(data.globalData)
    setTimeout(()=> {document.getElementById('my_modal_5').showModal() ; setPlay(true) , setloading(false) } , 3000) 
}

const [email , setEmail] = useState('')

const value = data.globalData.nof/20-25
console.log(data.globalData.nof)
const tim = value*1.5+60
console.log(data.globalData)

useEffect(()=> {
    if (sectionRef.current) {
        const yOffset = -80; // Offset in pixels
        const yPosition = sectionRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: yPosition, behavior: 'smooth' });
      }
} , [])


  return (
    <div  ref={sectionRef} className=" space-y-4 bg-slate-50 p-4 rounded-md  gradient-border">
         <div className="flex gap-4">
          {" "}
          <div className="avatar">
            <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={data.globalData.avatar} />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-md font-bold">{data.globalData.username}</span>
            <span className="text-md font-medium">{data.globalData.name}</span>
          </div>
        </div>
<div className="flex gap-2 items-center">
        {" "}
        <FaRegUser /> <strong>{value * 20 + 500}</strong> Followers
      </div>
      <div className="flex gap-2 items-center">
        {" "}
        <AiFillDollarCircle  />
        <p className=" font-semibold"> {value<50 ? ('Free | 1 time per user') : value/4 } </p>   {value>=50 && <FaDollarSign />}
      </div>
      <div className="flex gap-2 items-center">
        {" "}
        <IoTimeSharp />
        <strong>{ tim }</strong> Minutes
      </div>    

<div className="space-y-2"> <p className="font-medium">Your email adress</p>
      <div className=" flex items-center gap-2 px-0 pl-4 w-full rounded-sm my-input h-12 md:h-12">
          <MdAlternateEmail  className="shrink-0" />
          <input
            type="email"
            className="grow overflow-hidden"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          
        </div></div>
       

      <div className='flex flex-row z-10 justify-end gap-8 items-center pt-4 divid pr '>
      <p className='text-medium font-semibold'> </p>
      <button  disabled={loading} onClick={confirm} className='btn mybtn px-8'>
        {loading && <span className="loading loading-spinner loading-md"></span>}
        Confirm <FaCheck />
        
        </button>
    </div>




{/* Open the modal using document.getElementById('ID').showModal() method */}
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle rounded-none ">
  <div className="modal-box rounded-none">
    <div className="flex gap-4  items-center"> 
    <Lottie className='w-20' animationData={CheckAnimation} autoPlay={play} loop={false} />

      <h3 className="font-bold text-lg gradient1">Just on more step !</h3>
   </div>

    <p className="py-4 font-medium">
        Press continue then complete the task then you can receive your followers
    </p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn mybtn">Continue <FaArrowRight/></button>
      </form>
    </div>
  </div>
</dialog>


    </div>
  );
};

export default Confirm;
