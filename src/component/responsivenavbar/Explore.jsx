import React, { useState } from 'react';

const Explore = () => {
  const [activeTab, setActiveTab] = useState('images');

  return (
    <>
      <div className="h-13" />
      <div className="bg-[url(src/assets/imgex.avif)]  h-screen" >
        <h1 className="text-xl mt-9 font-serif font-extrabold text-gray-700 text-center">Gallery</h1>

        {/* Buttons for toggling between images and videos */}
        <div className="flex justify-center mt-5">
          <button
            className={`px-6 py-2 mx-2 text-white rounded ${activeTab === 'images' ? 'bg-blue-600' : 'bg-gray-400'}`}
            onClick={() => setActiveTab('images')}
          >
            Images
          </button>
          <button
            className={`px-6 py-2 mx-2 text-white rounded ${activeTab === 'videos' ? 'bg-blue-600' : 'bg-gray-400'}`}
            onClick={() => setActiveTab('videos')}
          >
            Videos
          </button>
        </div>

        {/* Image Gallery */}
        {activeTab === 'images' && (
          <div className="grid grid-cols-4 gap-5 mt-4 ml-5">
            {[1, 2, 3, 4, 5, 7, 8, 10, 11, 12, 13, 15, 17].map((num) => (
              <img
                key={num}
                className="h-60 w-80"
                src={`src/assets/exploreimages/${num}.jpg`}
                alt="Gallery Image"
              />
            ))}
          </div>
        )}

        {/* Video Gallery */}
        {activeTab === 'videos' && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-4 ml-5">
            {["Jharkhand.mp4", "Bihar.mp4", "Kerala.mp4","Mumbai.mp4","Tamil Nadu.mp4", "varanashi.mp4"].map((video, index) => (
              <video key={index} className="h-60 w-80" controls>
                <source src={`src/assets/explorevideos/${video}`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Explore;
