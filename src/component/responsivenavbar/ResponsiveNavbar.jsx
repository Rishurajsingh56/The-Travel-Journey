import React from "react";
import { Link } from "react-router-dom";

const ResponsiveNavbar = ({ open, setOpen }) => {
  return (
    <div
      className={`${
        open ? "left-0" : " -left-[100%] "
      }fixed bottom-0  top-0 bg-[rgba(15,15,15,0.6)] flex h-screen w-[-75%] flex-col justify-between px-8 pb-6 pt-16 text-black md:hidden rounded-r-xl shadow-md transition-all `}
    >
      <div>
        <nav>
          <ul className=" flex flex-col   gap-8 text-white  font-semibold">
            <li>
              <Link
                to="/home"
                onClick={() => setOpen(false)}
                className="hover:text-blue-300 cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={() => setOpen(false)}
                className="hover:text-blue-300  cursor-pointer"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/explore "
                onClick={() => setOpen(false)}
                className="hover:text-blue-300 cursor-pointer"
              >
                Explore
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className=" hover:text-blue-300 cursor-pointer"
              >
                Contact
              </Link>
            </li>
          </ul>

          <div>
            <Link to="/login">
              <button
                onClick={() => setOpen(false)}
                className="bg-blue-400  rounded-md  p-2 m-2 hover:bg-blue-300 cursor-pointer text-white "
              >
                Login
              </button>
            </Link>

            <Link to="/signup ">
              <button
                onClick={() => setOpen(false)}
                className="bg-blue-400 rounded-md p-2 m-2 hover:bg-blue-300 cursor-pointer text-white"
              >
                Sign Up
              </button>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default ResponsiveNavbar;
