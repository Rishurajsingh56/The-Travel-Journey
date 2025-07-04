import React from 'react'

const Pricing = () => {
  return (
    <>
    <div className="h-20  "/>

<div className=" h-[1000px]">
    <h1 className="text-black font-serif ml-[700px] text-3xl">Contact Us </h1>
         

        <p className=" ml-20 mt-20  text-2xl font-serif">Let's connect and get to know each other</p>

  
             <div className=" mt-10  justify-center  gap-20  md:grid  md:grid-cols-2 ">

            <div className="shadow-2xl ml-30 h-70 w-100">
              
              <img className="size-20 ml-35" src="src/assets/call us.png" alt="" />
              <h1 className="font-semibold text-gray-900 ml-37">Call Us</h1>        
               <h2 className="font-sans text-gray-700 ml-5 mt-9">Get instant support, Quick answers by phone, and Fastest way to get help.</h2>
              
              <button className="rounded-2xl shadow-2xl bg-gray-50 w-35 ml-20 pr-5 hover:bg-gray-300 mt-10"> +91 124 345 895</button>
              
              </div>




            < div className="shadow-2xl   h-70 w-100" >
              
  <img className="size-20 ml-35" src="src/assets/email us.png" alt="" />
  <h1 className="font-semibold text-gray-900 ml-37">Email Us</h1>                         
         <h2 className="font-sans text-gray-700 ml-25 mt-9">For any queries mail us </h2>

  <button className="rounded shadow-2xl  ml-15 bg-gray-50 hover:bg-gray-500 mt-10"> rishusingh10135@gmail.com</button>
              
              
            </div>












             </div>








  
    
    
    </div>
    
    
    </>
  )
}

export default Pricing