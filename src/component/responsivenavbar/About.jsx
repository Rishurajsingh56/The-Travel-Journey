import React from "react";

const About = () => {
  return (
    <div>
      <div className="h-20 " />

      <div className="">
        <div className="flex  flex-col md:flex-row">
          <img
            className="h-[600px] w-[900px] p-10"
            src="src/assets/aboutimage.jpg"
            alt=""
          />
   
          

          <div className="bg-sky-400  rounded-2xl  p-4  h-20 w-80 ml-[800px]  absolute top-70">
            <p className="text-xl font-serif font-bold text-white">
              HOW WE ARE BEST FOR TRAVEL !{" "}
            </p>
          </div>


           <div className="absolute top-[650px]    h-[400px] w-[600px] shadow-">
            
            <h1 className="text-2xl  font-serif font-bold ml-9">HOW WE ARE BEST FOR TRAVEL !</h1>
             <p className="ml-9 mt-6">
              
         

Exceptional Destinations & Insights**: Do you offer exclusive travel destinations, hidden gems, or insider tips that others don’t? Show how your platform provides unparalleled access to unforgettable experiences.
User-Friendly Experience**: A seamless booking process, intuitive navigation, and a beautifully designed interface make a big difference. If your website is faster, clearer, and more enjoyable to use than competitors, that’s a strong selling point.
Authentic Customer Support**: Travelers love reliable support, especially when plans change unexpectedly. Emphasizing fast, friendly, and knowledgeable customer service can give your site an edge.
       


                           </p>


           </div>



          <div className="flex flex-col gap-2 pt-70 md:pt-4  ">
          
            <div className=" shadow-2xl h-50 w-60 ml-60">
              <img  className="size-20 ml-19" src="src/assets/destinationlogo.jpg" alt="" />
              <h1 className="font-serif ml-9">50+ Destination</h1>
              <p className="font-extralight ml-3 mt-3">
              Wander far and wide,
            Find beauty in the unknown,
             Let the journey shape you.
              </p>
            
            </div>
          

            <div className=" shadow-2xl h-50 w-60 ml-60">
             <img className=" size-15 ml-19 " src="src/assets/pricetag.png" alt="" />
              <h1 className="font-serif ml-9">Best Price In The Industry</h1>
            <p className="font-extralight ml-3 mt-4">
            Unbeatable Prices, Guaranteed.
            Top Quality at the Best Rates.
             Your Budget, Our Priority!
            </p>
            </div>



            <div className=" shadow-2xl h-50 w-60 ml-60">
              <img  className="size-15 ml-19"src="src/assets/clock.png" alt="" />
            <h1 className="font-serif ml-9">Super Fast Booking</h1>
             
             <p className="font-extralight ml-3 mt-4">
             Lightning-Fast Booking.
            Just a Few Clicks.
            Confirm Instantly & Travel!
             </p>
            </div>

          
          
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
