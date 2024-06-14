import React, { useEffect, useRef } from "react";

import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";

const UserCard = ({ data }) => {
  const sectionRef = useRef(null);

  const scrollToSection = () => {
    data.setStep2(true);
    if (sectionRef.current) {
      const yOffset = -80; // Offset in pixels
      const yPosition =
        sectionRef.current.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: yPosition, behavior: "smooth" });
    }
  };

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, y: 20, scale: 1.05 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className=" space-y-4 bg-slate-50 p-4 rounded-md  gradient-border"
    >
      <div className="flex flex-col gap-4 ">
        <div className="flex gap-4">
          {" "}
          <div className="avatar">
            <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={data.userData.avatar} />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-md font-bold">{data.userData.username}</span>
            <span className="text-md font-medium">{data.userData.name}</span>
          </div>
        </div>

        <div className="flex gap-8">
          <div className="flex flex-col">
            <span className="text-md font-semibold">
              {" "}
              {data.userData.followers}
            </span>
            <span>Followers</span>
          </div>

          <div className="flex flex-col">
            <span className="text-md font-semibold">
              {" "}
              {data.userData.following}
            </span>
            <span>Following</span>
          </div>
          <div className="flex flex-col">
            <span className="text-md font-semibold">
              {" "}
              {data.userData.likes}
            </span>
            <span>Likes</span>
          </div>
        </div>

        <div className="flex flex-row z-10 justify-end gap-8 items-center pt-4 divid ">
          <p className="text-medium font-semibold"> Is that you ?</p>
          <button onClick={scrollToSection} className="btn mybtn px-8">
            Next <FaArrowRight />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default UserCard;
