import React from "react";
import Herobg from "./herobg/videoplayback.mp4";

const Hero4 = () => {
  return (
    <>
      <div className="mt-10">
        <video
          autoPlay
          loop
          muted
          className="    md:h-[450px] m-2  pb-3 md:w-full object-cover    "
        >
          <source className="z-40" src={Herobg} type="video/mp4" />
        </video>
      </div>

      <div className="bg-white/1   absolute top-[171rem] ml-3 h-[400px] w-full object-cover ">
        <div className="flex items-center ">
          <div className="ml-6">
            <h1 className="text-red-500 font-sans ">CALL TO ACTION</h1>
            <h2 className="text-white text-4xl font-serif font-medium ">
              READY FOR UNFORGATABLE
            </h2>
            <h3 className="text-white text-4xl font-serif font-medium">
              TRAVEL.REMEMBER US !
            </h3>
            <p className="mt-15 text-white">
              Embark on a journey like never before unforgettable adventures
              start with us
            </p>
            <p className="text-white">
              Get ready for an unforgettable journey with us adventure awaits at
              every turn
            </p>
          </div>

          <div className="mt-35 ml-5 md:ml-[700px]">
            <button className="  border-2 border-white  text-white p-2 font-serif font-semibold animate-bounce bg-white/25">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero4;
