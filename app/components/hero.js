"use client"

import React, { useState } from 'react'
import Lottie from 'lottie-react';
import { FiUser } from "react-icons/fi";

import animationData from '@/animations/arrow2.json'

const Hero = ({methods}) => {


    const [userName , setUserName] = useState("")

    function handleSubmit() {
        methods.getUser(userName)
    }
  return (
    <section className=''>

    <div id='hero'  className="flex flex-col gap-4 bg-slate-100 p-4 rounded-lg hrh py-8 gradient-border hero3">
      <div className="flex flex-row gap-6 justify-center items-center ">
        <div>
          <img src="/icons/video.png" className="w-12"></img>
        </div>
        <div>
          <h1 className="text-2xl font-bold gradient">Get free tiktok folowers</h1>
          <h2 className="text-md font-semibold ">Instant followers</h2>
        </div>

        <Lottie className='w-210' animationData={animationData} loop={true} />

      </div>
      {/* {fonction.isError && <Alert message={fonction.errormessage}></Alert>} */}

      <div className="flex flex-col gap-2 md:flex-row">

    
          
        <div className=" flex items-center gap-2 px-0 pl-4 w-full rounded-sm my-input h-12 md:h-auto">
          <FiUser className="shrink-0" />
          <input
            type="text"
            className="grow overflow-hidden"
            placeholder="Username e.g. karla_dar4"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          {/* <button disabled={methods.loading} className="paste" onClick={handleSubmit}>
          <FaArrowRight />
          </button> */}
        </div>
        
        <button disabled={methods.loading} onClick={handleSubmit} className="btn btn-accent w-full md:w-auto bg-gradient rounded-xl h-8">
            Check
            {methods.loading && <span className="loading loading-spinner loading-md"></span>
            }
        </button>
      </div>
    </div>
    </section>
  )
}

export default Hero