import React from 'react'
import { TbBrandSpeedtest } from "react-icons/tb";
import { PiThumbsUp } from "react-icons/pi";
import { FiDollarSign } from "react-icons/fi";
import { IoIosFlash } from "react-icons/io";
import { IoShieldOutline } from "react-icons/io5";
import Lottie from 'lottie-react';

import AlertAnimation from '@/animations/user.json'
import GrowAnimation from '@/animations/bt.json'

import Rating from '../srv/ratings';


const TopLanding = () => {
    return (
        <div className=' relative'>

            <div className='circle'></div>
            <div className=' circle2'></div>

            <div className='flex flex-col md:flex-row md:justify-between md:items-center'>

                <div className=' order-2 flex flex-col items-center md:items-start md:order-1'>
                    <h1 className='text-xl font-bold uppercase gradient2'>
                        Get free Tiktok followers
                    </h1>
                    <h2 className='text-md font-medium ' >
                        Boost you Tiktok account for free
                    </h2>
                    <a href='#gohere' className='btn mybtn mt-4'>GET STARTED</a>

                    <p className='mt-8 font-semibold text-lg btom'>
                        Why choose Us ?
                    </p>



                    <div className='flex w-full justify-around  mt-8'>
                        <div className='flex flex-col justify-center items-center gap-2'>
                            <span className='ft'>
                                <PiThumbsUp size={40} />
                            </span>
                            <p className='font-medium '>
                                Easy
                            </p>
                        </div>

                        <div className='flex flex-col justify-center items-center gap-2'>
                            <span className='ft'>
                                <IoIosFlash size={40} />
                            </span>
                            <p className='font-medium '>
                                Fast
                            </p>
                        </div>

                        <div className='flex flex-col justify-center items-center gap-2'>
                            <span className='ft'>
                                <FiDollarSign size={40} />
                            </span>
                            <p className='font-medium '>
                                Free
                            </p>
                        </div>

                        <div className='flex flex-col justify-center items-center gap-2'>
                            <span className='ft'>
                                <IoShieldOutline size={40} />
                            </span>
                            <p className='font-medium '>
                                Reliable
                            </p>
                        </div>

                    </div>

                    <div>
                        <p className='mt-8 font-semibold text-lg btom'>
                            How does it works ?
                        </p>
                    </div>

                    <div className='w-full p-4'>
                        <div className='flex flex-col cardd mt-4'>
                            <div className='step'>1</div>
                            <p className='font-medium text-lg'>
                                Enter your username
                            </p>
                        </div>

                        <div className='flex flex-col cardd mt-4'>
                            <div className='step'>2</div>
                            <p className='font-medium text-lg'>
                                Watch your account grow
                            </p>
                        </div>
                    </div>

                    <p className='mt-8 font-semibold text-lg btom'>
                        What they say about us
                    </p>

                   <Rating  />
                   <div id='gohere'></div>



                    <Lottie className='w-20 mt-4' animationData={GrowAnimation} loop={true} />


                </div>
                <img src='/images/hero.svg' className='w-80 hidden md:flex'></img>
            </div>
        </div>
    )
}

export default TopLanding