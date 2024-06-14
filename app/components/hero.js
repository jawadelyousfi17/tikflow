"use client"

import React, { useState } from 'react'
import { FiLink } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa6";
import { FiUser } from "react-icons/fi";

const Hero = ({methods}) => {


    const [userName , setUserName] = useState("")

    function handleSubmit() {
        methods.getUser(userName)
    }
  return (
    <section  className="flex flex-col gap-4 bg-slate-100 p-4 rounded-lg hrh py-8 gradient-border hero3">
      <div className="flex flex-row gap-6 justify-center items-center ">
        <div>
          <img src="/icons/video.png" className="w-12"></img>
        </div>
        <div>
          <h1 className="text-2xl font-bold gradient">Get free tiktok folowers</h1>
          <h2 className="text-md font-semibold ">Instant 1k followers</h2>
        </div>
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
        
        <button disabled={methods.loading} onClick={handleSubmit} className="btn btn-accent w-full md:w-auto bg-gradient rounded-sm h-8">
            Check
            {methods.loading && <span className="loading loading-spinner loading-md"></span>
            }
        </button>
      </div>
    </section>
  )
}

export default Hero