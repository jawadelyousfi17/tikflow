"use client"

import React, { useEffect, useState } from 'react'

const Navbar = ({uri}) => {

  const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


  return (
    <nav className={`navbar bg-accent h-12 mynav ${scrolled? 'scrolled' : ''}`}>
  <div className="flex-1">
    <a className="btn btn-ghost text-xl" href='/'>TIKTOK FOLLOWERS</a>
  </div>
  <div className="p-4 ">
  <div className="avatar">
  <div className="w-10 rounded-full  ring-offset-base-100 ring-offset-4">
    {uri && <img src={uri} />}
  </div>
</div>
  </div>
</nav>
  )
}

export default Navbar