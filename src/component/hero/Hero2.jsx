import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { CgAirplane } from "react-icons/cg";

const Hero2 = () => {
  return (
    <hero className="  mt-5   conatiner ml-20 flex items-center  shadow-2xs   w-2xl  lg:w-7xl h-96  gap-9   ">
      <div className="  ">
        <div>
          <h2 className="text-2xl font-serif font-bold ">Search flights</h2>
          <p>Enjoy hassle free flight ticket bookings at lowest airfare</p>
          <div className="  w-96 h-75 m-2 shadow-2xl ">
            <div className="flex items-center justify-center pt-9">
              <input
                className="rounded-2xl border  border-blue-300 h-10 w-40 pl-7 "
                type="text"
                placeholder="Where from?"
              />

              <CgAirplane className=" size-6 " />

              <input
                className="rounded-2xl border border-blue-300  h-10 w-40 pl-7"
                type="text"
                placeholder="Where to?"
              />
            </div>

            <p className="font-medium ml-6 ">
              {" "}
              Select Date :
              <input
                className="p-2  rounded-3xl border border-blue-300 h-10 mt-5 ml-8"
                type="datetime-local"
              />
            </p>

            <p className="font-medium ml-5 pt-4">
              Choose Gender :{" "}
              <input
                className="ml-2"
                type="radio"
                name="gender"
                value="male"
                placeholder=""
              />{" "}
              Male
              <input
                className="ml-4"
                type="radio"
                name="gender"
                value="female"
                placeholder=""
              />{" "}
              Female
              <input
                className="ml-4"
                type="radio"
                name="gender"
                value="other"
                placeholder=""
              />{" "}
              Other
            </p>
https://www.profitableratecpmnetwork.com/ape8shrwy?key=ef4514de53beca0391a84f93170f7433
            <div className="flex items-center justify-center mt-8 gap-9">
              <img
                className="w-40 h-16"
                src="src/assets/domestic-flights-coupons.jpg"
                alt=""
              />
              <button className=" rounded-3xl bg-orange-300  p-5 hover:bg-amber-500  font-medium">
                Search Flight
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className=" mr-30  ">
        <img src="src/assets/Flight.png" alt="" />
      </div>
    </hero>
  );
};

export default Hero2;
