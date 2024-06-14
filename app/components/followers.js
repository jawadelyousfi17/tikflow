import React, { useEffect, useRef, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { IoTimeSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import { AiFillDollarCircle } from "react-icons/ai";
import { FaDollarSign } from "react-icons/fa6";

const Followers = ({data}) => {
    const sectionRef = useRef(null);


  const [value, setValue] = useState(25);
    const [tim , setTim] = useState(0)
  const handleChange = (event) => {
    setValue(event.target.value);
  };


  const confirm = () => {
    data.setStep3(true)
    data.setGlobalData(old => ({...old , nof : value * 20 + 500}))
    if (sectionRef.current) {
      const yOffset = -80; // Offset in pixels
      const yPosition = sectionRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: yPosition, behavior: 'smooth' });
    }
  };


  useEffect(() => {
    setTim(value*1.5+60)
  } , [value])
  return (
    <div     ref={sectionRef}
    className="space-y-4 bg-slate-50 p-4 rounded-md  gradient-border">
      <p className="text-lg font-semibold">How many followers you want ?</p>
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


      <input
        type="range"
        min={0}
        max="100"
        className="range"
        step="25"
        value={value}
        onChange={handleChange}
      />
      <div className="w-full flex justify-between text-xs px-2">
        <div className="flex flex-col">
          <p className="text-lg">500</p>Followers
        </div>
        <div className="flex flex-col">
          <p className="text-lg">1000</p>Followers
        </div>
        <div className="flex flex-col">
          <p className="text-lg">1500</p>Followers
        </div>
        <div className="flex flex-col">
          <p className="text-lg">2000</p>Followers
        </div>
        <div className="flex flex-col">
          <p className="text-lg">2500</p>Followers
        </div>
      </div>
        <div className='flex flex-row z-10 justify-end gap-8 items-center pt-4 divid '>
      <p className='text-medium font-semibold'> </p>
      <button onClick={confirm} className='btn mybtn px-8'>Next <FaArrowRight/></button>
    </div>
   
    </div>
  );
};

export default Followers;
