import React from "react";
import { motion } from "motion/react";
const Banner = () => {
  return (
    <div className="max-w-screen-2xl mx-auto ">
      <div className=" py-30 ">
        <div className="flex  items-center justify-between  px-6 gap-10">
          {/* Left Section */}
          <motion.div
            className="w-1/2 mt-40"
            animate={{
              x: [-250, 0],
              transition: {
                duration: 1.5,
              },
            }}
          >
            <h1 className="font-bold text-black text-5xl w-120 leading-tight">
              The <span className="text-blue-500">Easiest Way</span> to Get Your
              New Job
            </h1>
            <p className="text-gray-700 mt-4 text-lg w-140">
              Each month, more than 3 million job seekers turn to our website in
              their search for work, making over 140,000 applications every
              single day.
            </p>
          </motion.div>

          {/* Right Section */}
          <div className="w-1/2 relative h-full ">
            <motion.img
              src="https://jobbox-html-frontend.vercel.app/assets/imgs/page/homepage1/banner1.png"
              alt=""
              className="w-80 max-w-sm"
              animate={{
                y: [0, 80, 0],
                transition: {
                  duration: 5,
                  repeat: Infinity,
                },
              }}
            />
            <motion.img
              src="https://jobbox-html-frontend.vercel.app/assets/imgs/page/homepage1/banner2.png"
              alt=""
              className="absolute left-40 top-50 w-90"
              animate={{
                x: [0, 100, 0],
                transition: { duration: 10, repeat: Infinity },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
