import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";

const Footer = () => {
  return (
    <footer className="bg-black  ">
      <div className="grid md:grid-cols-4 grid-cols-1 lg:gap-4 ml-4 md:ml-7">
        <div>
          <h1 className=" text-white font-serif font-extralight mb-2 mt-5">
            Company
          </h1>
          <ul ul className="text-white mt-4">
            <li>About us</li>
            <li>Faq</li>
            <li>Blogs</li>
          </ul>
        </div>

        <div>
          <h1 className="text-white font-serif font-extralight mt-5 mb-2">
            Quick Link
          </h1>

          <ul className="text-white">
            <li>
              <Link to="/home" className="hover:text-blue-300 cursor-pointer">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-300 cursor-pointer">
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/pricing"
                className="hover:text-blue-300 cursor-pointer"
              >
                Pricing
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h1 className="text-white font-serif font-extralight mt-5 mb-2">
            Explore
          </h1>
          <ul className="text-white">
            <li>Faq</li>
            <li>Destination</li>
          </ul>
        </div>

        <div>
          <h1 className="text-white font-serif font-extralight mt-5 mb-2">
            Contact Info
          </h1>

          <p className="text-white">Bhopal M.P</p>
          <p className="text-white">rishusingh10135@gmail.com</p>
        </div>
      </div>

      <div className=" pt-4 sm:ml-10 lg:ml-[900px] flex items-center gap-8 ">
        <h1 className="text-white font-sans">Follow us</h1>

        <FaFacebook className="text-blue-800 text-2xl" />
        <FaTwitter className="text-sky-400 text-2xl" />
        <ImInstagram className="text-pink-800 text-2xl" />
      </div>

      <div className="border border-t-white mt-4 ">
        <p className="text-white ml-60">@ 2024. rishucod All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
