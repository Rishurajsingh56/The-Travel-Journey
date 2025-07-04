import React from "react";

const HomeHero = () => {
  return (
    <div className="mt-20">
      <div className="flex  container mx-auto   h-[300px] md:ml-3  md:pl-6  md:gap-20">
        <div>
          <img
            className="size-20 ml-15"
            src="src/component/hero/homeheroimg/umberalla-Photoroom.png"
            alt=""
          />

          <h1 className="font-serif font-semibold ml-5 text-gray-500 mt-3">
            Discover the possibilities
          </h1>
          <p className="size-80 mt-5 text-gray-500 font-sans">
            With nearly half a million attractions hotels & more, you're sure to
            find joy
          </p>
        </div>

        <div>
          <img
            className="size-20 ml-15"
            src="src/component/hero/homeheroimg/deal.png"
            alt=""
          />
          <h1 className=" ml-5 font-serif font-semibold text-gray-500 mt-3">
            Enjoy deals & delights
          </h1>

          <p className="size-80 mt-5 text-gray-500 font-sans">
            Quality activities, Great prices. Plus, earn credits to save more.{" "}
          </p>
        </div>

        <div>
          <img
            className="size-20 ml-15"
            src="src/component/hero/homeheroimg/earth-Photoroom.png"
            alt=""
          />

          <h1 className="font-serif font-semibold ml-5 text-gray-500 mt-3">
            Exploring made easyt
          </h1>
          <p className="size-80 mt-5 text-gray-500 font-sans">
            Book last minute, skip lines & amp; get free cancellation for easier
            explorinng
          </p>
        </div>

        <div>
          <img
            className="size-20 ml-10"
            src="src/component/hero/homeheroimg/trusts-Photoroom.png"
            alt=""
          />

          <h1 className="font-serif font-semibold ml-5 text-gray-500 mt-3">
            Travel you can trust
          </h1>
          <p className="size-80 mt-5 text-gray-500 font-sans">
            Read reviews & get reliable customer support. We're with you at
            every step.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
