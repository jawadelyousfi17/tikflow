"use client";

import React, { useEffect, useState } from "react";
import Hero from "./hero";
import UserCard from "./user-card";
import axios from "axios";
import SkeletonUser from "./user-skeleton";
import ErrorM from "./error";
import Followers from "./followers";
import Confirm from "./confirm";
import Navbar from "./navbar";



const MainPage = () => {
    const [step2 , setStep2] = useState(false)
    const [step3 , setStep3] = useState(false)
    
  const [loading, setLoading] = useState(false);
  const [ready, setReady] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("an error has accured");
  const [userData, setUserData] = useState({
    username: null,
    name: null,
    avatar: null,
    followers: null,
    following: null,
    likes: null,
  });
const [globalData , setGlobalData] = useState({
        ...userData ,
        nof : null

    })

    useEffect(()=> {
        setGlobalData(old => ({...old , ...userData}))
    } , [userData])

  const getUser = async (username) => {
    setStep2(false)
    setLoading(true)
    setReady(false)
    setError(false)
    // fetch the api
    const options = {
      method: "GET",
      url: "https://tiktok-scraper7.p.rapidapi.com/user/info",
      params: {
        unique_id: username,
      },
      headers: {
        "x-rapidapi-key": "763cf1c4b9msh06c005a3b61ac0ap1158e4jsn4a236ac9db52",
        "x-rapidapi-host": "tiktok-scraper7.p.rapidapi.com",
      },
    };

    try {
      const res = await axios.request(options);
      const response = res.data;
      if (response.msg !== "success") {
        setLoading(false)
        setReady(false)
        setError(true)
        setErrorMessage("No user found. please check your username")
        return
      }
      const data = response.data;
      setUserData({
        username: data.user.uniqueId,
        name: data.user.nickname,
        avatar: data.user.avatarLarger,
        followers: data.stats.followerCount,
        following: data.stats.followingCount,
        likes: data.stats.heart,
      });
      setLoading(false)
      setReady(true)
      setError(false)
    } catch (error) {
      setLoading(false)
      setReady(false)
      setError(true)
      setErrorMessage("Can't get the user Info for now. please try again later")
    }
  };

  return (
    <>
    <Navbar uri={userData.avatar}></Navbar>     
    <div className="mt-20">
     <Hero methods={{ getUser , loading }} className="" />
    </div>

    <div className="p-4 space-y-4  md:w-1/2 md:mx-auto">
     { ready &&  <UserCard data={{userData , setStep2}} />}
     {!ready && loading && <SkeletonUser/>}
     {step2 && ready && <Followers data={{setStep3 , globalData , setGlobalData}}/>}
    { error && <ErrorM message={errorMessage} />}
    {step3 && ready && <Confirm data={{globalData}} />}
    <div className="h-svh"></div>
    </div>
    
    </>
  );
};

export default MainPage;
