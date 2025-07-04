import React, { useState } from "react";
import BgVideo from "../../assets/backgroundvideo.mp4";
import {  SearchIcon } from "lucide-react";

const Home = () => {
  const [value, setValue] = useState("");
  const options = [
     { value: "Location" },
      { value: "Andhra Pradesh" },
       { value: "Arunachal Pradesh" },
       {value:"Assam"},

       { value: "Chhattishgarh" },
       { value: "Goa" },
        { value: "Gujarat" },
        {value:"Haryana"},
        { value: "Himachal Prradesh" },
        { value: "Jharkhand" },
         { value: "Karnataka" },
         {value:"Kerala"},
         { value: "Madhya Pradesh" },
         { value: "Maharashtra" },
          { value: "Manipur" },
          {value:"Meghalaya"},
        
          { value: "Mizoram" },
          { value: "Nagaland" },
           { value: "Odisha" },
           {value:"Punjab"},
           { value: "Rajasthan" },
           { value: "Sikkim" },
            { value: "Tamil Nadu" },
            {value:"Telengana"},
            { value: "Tripura" },
      { value: "Uttar Pradesh" },
       { value: "Uttrakhand" },
       {value:"West Bengal"},
  

     ];

const guests =[
        {value:"Select"} ,
  {value:"2 adults 1 children"},
  {value:"2 adults 2 children"},
  {value:"2 adults ,3 children"},
  {value:"2 adults"}


];

  
  
     function handleSelect(event) {
    setValue(event.target.value);
  }


  function handleSelect (guess) {
    setValue (guess.target.value);

  } 
   
       

  return (
    <>
      <div className=" m-3 relative     md:h-[700px]">
        <video
          autoPlay
          loop
          muted
          className="  absolute right-0 top-0 h-[650px] w-full object-cover -z-50 "
        >
          <source src={BgVideo} type="video/mp4" />
        </video>

        <div className="bg-white  h-50   ml-0 w-10     md:h-[150px] md:w-[1000px] absolute top-70 md:top-[550px]  md:ml-55 rounded-3xl shadow-2xl">
          <div className="md:flex md:items-center   grid grid-cols-2 md:mt-8 md:ml-4">
            <div className=" ">
              <div className="flex gap-1">
                <SearchIcon className="text-gray-700 " />
                <h1 className=" font-serif font-extrabold text-gray-700 ">Location</h1>
              </div>

             <div className="border mt-2 border-gray-300 h-9 w-30">
              <select className=" h-9 w-30  border border-gray-300 " onChange={handleSelect}>
                {options.map((option) => (
                  <option className="">
                    
                    {option.value}
                  </option>
                ))}
              </select>
              </div>

            </div>

            <hr className="w-22 mt-6 text-gray-300 rotate-90 " />

            <div>
              <h1 className="font-serif  font-extrabold text-gray-700">Check in</h1>
            <input
   className="border border-black/20 mt-2 h-9 w-30"
                type="date"
              />
              

               
            </div>

            <hr className="w-22 mt-6 text-gray-300 rotate-90 " />

            <div>
              <h1 className="font-serif font-extrabold text-gray-700">Check out</h1>

              <input
                className="border mt-2 border-black/20  h-9 w-30"
                type="date"
              />
            </div>

            <hr className="w-22 mt-6 text-gray-400 rotate-90 " />

            <div>
              <h1 className="font-serif font-extrabold text-gray-700">Guest</h1>

             <div className="border mt-2 border-gray-300 h-9 w-30">
             <select className="form-slect border  border-gray-300 h-9 w-30" onChange={handleSelect}>
 
               {guests.map((guest)=>(
                <option >
               {guest.value}
               </option>

               ))}
             </select>
             </div>
            </div>

            <hr className="w-22 mt-6 text-gray-300 rotate-90 " />

            <div className="bg-cyan-300/20  shadow-2xl border border-gray-50 flex items-center rounded-xl mr-3 h-12 w-30 hover:bg-sky-300 ">
              <SearchIcon className="ml-3 text-gray-600" />
              <button className="font-serif text-xl  text-gray-600 ">Search</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
