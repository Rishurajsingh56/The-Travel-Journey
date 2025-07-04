import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaStar } from "react-icons/fa";
const Hero = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -500 : 500,
        behavior: "smooth",
      });
    }
  };

  const images = [
    "Bihar.jpg",
    "delhi.avif",
    "hyderabad.jpg",
    "kerela.jpg",
    "mumbai.avif",
    "rajasthan.jpg",
    "tamilnadu.jpg",
    "Varanashi.avif",
  ];

  return (
    <div className="mt-10 shadow-2xl shadow-white  ">
      <h1 className="font-bold px-10 pb-6 font-serif text-gray-800 text-2xl">
        Top Popular Destinations
      </h1>

      <div className="relative">
        {/* Left Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 backdrop-blur-md rounded-full p-3 shadow-md hover:bg-white"
        >
          <ChevronLeft className="text-blue-400" size={28} />
        </button>

        {/* Scroll able Images */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto no-scrollbar gap-6 px-14"
        >
          {images.map((img, index) => (
            <div
              key={index}
              className="flex-shrink-0 h-[300px] w-[500px] rounded-2xl overflow-hidden shadow-xl transition-transform duration-300 hover:scale-105 active:scale-95"
            >
              <img
                src={`src/assets/herodestinationimg/${img}`}
                alt={img}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 backdrop-blur-md rounded-full p-3 shadow-md hover:bg-white"
        >
          <ChevronRight size={28} />
        </button>
      </div>

      {/* NEW PART*/}

      <h1 className=" mt-10 ml-10 text-2xl font-serif font-semibold mb-2 text-gray-800">
        Top Hotels
      </h1>

      <div className="grid grid-cols-3 container mx-auto">
        <div className="h-80 w-80  shadow-lg">
          <img
            className="h-40 w-70 ml-5 mt-1"
            src="src/assets/hotelimg/Greaves_Taj_Rambagh_Palace.jpg"
            alt=""
          />

          <h1 className=" mt-1 ml-12 font-semibold font-serif text-gray-700 ">
            Rambagh Palace, Jaipur
          </h1>
          <p className="text-gray-500 ml-3">
            Experience Rajput hospitality staying in a majestic palace hotel
            built in 1835, the former abode of kings and queens.{" "}
          </p>

          <div className="flex items-center gap-15 mt-5">
            <div className="flex items-center">
              <h1 className="text-gray-700 font-sans ">Rating</h1>
              <h2 className="text-yellow-400 flex ml-1">
                {" "}
                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
              </h2>
            </div>

            <h3 className="font-sans text-gray-700 ">Price :₹89,500 </h3>
          </div>
        </div>

        <div className="h-80 w-80  shadow-lg cursor-pointer ">
          <img
            className="h-40 w-70 ml-5"
            src="src/assets/hotelimg/tajmumbai.jpg"
            alt=""
          />

          <h1 className=" mt-1 ml-10 font-semibold font-serif text-gray-700 ">
            The Taj Mahal Palace, Mumbai
          </h1>
          <p className="text-gray-500 ml-3">
            Opposite the Arabian Sea, this luxury hotel is a 6-minute walk from
            the Gateway of India and 3 km from the bustling Marine Drive.{" "}
          </p>

          <div className="flex items-center gap-15 mt-2">
            <div className="flex items-center">
              <h1 className="text-gray-700 font-sans ">Rating</h1>
              <h2 className="text-yellow-400 flex ml-1">
                {" "}
                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
              </h2>
            </div>

            <h3 className="font-sans text-gray-700 ">Price :₹29,500 </h3>
          </div>
        </div>

        <div className="h-80 w-80 shadow-lg">
          <img
            className="h-40 w-70"
            src="src/assets/hotelimg/tajudaipur.jpg"
            alt=""
          />
          <h1 className=" mt-1 ml-10 font-semibold font-serif text-gray-700 ">
            Taj Lake Palace, Udaipur
          </h1>
          <p className="text-gray-500 ml-3">
            Historic area with boat rides on peaceful Lake Pichola, surrounded
            by City Palace & lakeside ghats.{" "}
          </p>

          <div className="flex items-center gap-15 mt-2">
            <div className="flex items-center mt-4">
              <h1 className="text-gray-700 font-sans ">Rating</h1>
              <h2 className="text-yellow-400 flex ml-1 ">
                {" "}
                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
              </h2>
            </div>

            <h3 className="font-sans text-gray-700 ">Price :₹62,000 </h3>
          </div>
        </div>

        <div className="h-80 w-80 shadow-lg mt-6">
          <img
            className="h-40 w-70 ml-5"
            src="src/assets/hotelimg/itcmughal.jpg"
            alt=""
          />

          <h1 className=" mt-1 ml-14 font-semibold font-serif text-gray-700 ">
            ITC Mughal, Agra
          </h1>
          <p className="text-gray-500 ml-3">
            Amid 23 acres of landscaped gardens, this contemporary hotel is 3 km
            from the iconic Taj Mahal and 4 km from the red sandstone Agra Fort{" "}
          </p>

          <div className="flex items-center gap-15 mt-2">
            <div className="flex items-center">
              <h1 className="text-gray-700 font-sans ">Rating</h1>
              <h2 className="text-yellow-400 flex ml-1">
                {" "}
                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
              </h2>
            </div>

            <h3 className="font-sans text-gray-700 ">Price :₹19,200 </h3>
          </div>
        </div>

        <div className="h-80 w-80 shadow-lg mt-6">
          <img
            className="h-40 w-70 ml-5"
            src="src/assets/hotelimg/oberoihotel.jpeg"
            alt=""
          />
          <h1 className=" mt-1 ml-14 font-semibold font-serif text-gray-700 ">
            The Oberoi, New Delhi
          </h1>
          <p className="text-gray-500 ml-3">
            The Oberoi, New Delhi, garners acclaim for delivering outstanding
            service with staff noted for their friendliness and professionalism.{" "}
          </p>

          <div className="flex items-center gap-15 mt-2">
            <div className="flex items-center">
              <h1 className="text-gray-700 font-sans ">Rating</h1>
              <h2 className="text-yellow-400 flex ml-1">
                {" "}
                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
              </h2>
            </div>

            <h3 className="font-sans text-gray-700 ">Price :₹15,200 </h3>
          </div>
        </div>

        <div className="h-80 w-80 shadow-lg mt-6">
          <img
            className="h-40 w-70 ml-5"
            src="src/assets/hotelimg/oberoiudaipur.jpg"
            alt=""
          />

          <h1 className=" mt-1 ml-14 font-semibold font-serif text-gray-700 ">
            The Oberoi Udaivilas, Udaipur
          </h1>
          <p className="text-gray-600 ml-3">
            Set amid gardens and overlooking Lake Pichola, this luxury hotel is
            2 km from both Jagdish Temple and the City Palace Museum.{" "}
          </p>

          <div className="flex items-center gap-15 mt-2">
            <div className="flex items-center">
              <h1 className="text-gray-700 font-sans ">Rating</h1>
              <h2 className="text-yellow-400 flex ml-1">
                {" "}
                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
              </h2>
            </div>

            <h3 className="font-sans text-gray-700 ">Price :₹47,200 </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
