import React, { useState } from 'react';
import logo from '../assets/logotravel.png';
import { Menu, X } from 'lucide-react';
import ResponsiveNavbar from "./responsivenavbar/ResponsiveNavbar";
import { Link } from 'react-router-dom';



const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (

<>




    <div className="bg-[rgba(15,14,14,0.7)] md:px-0 fixed top-0 w-full">
      <div className="flex items-center justify-between px-5 ">
        
        {/* Logo Section */}
        <div className="flex items-center">
          <img src={logo} alt="logo" className="h-20 w-20 pt-3" />
          <h1 className=" font-serif font-semibold text-xl text-blue-300">The Travel Journey</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="md:flex hidden">
          <ul className="flex items-center pr-20 gap-8 text-white font-semibold">
            <li><Link to='/home' className="hover:text-blue-300 cursor-pointer">Home</Link></li>
            <li><Link to='/about' className="hover:text-blue-300 cursor-pointer">About Us</Link></li>
            <li><Link to='/explore' className="hover:text-blue-300 cursor-pointer">Explore</Link></li>
            <li><Link to='/contact' className="hover:text-blue-300 cursor-pointer">Contact</Link></li>
          </ul>

          <div className="gap-3">
            <Link to ="/login">
            <button className="bg-blue-400 rounded-md p-2 m-2 text-white hover:bg-blue-300 cursor-pointer">
              Login
            </button>
            </Link>
            <Link to='/signup'>
              <button className="bg-blue-400 rounded-md text-white p-2 m-2 hover:bg-blue-300 cursor-pointer">
                Sign Up
              </button>
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden m-5">
          {open ? (
            <X onClick={() => setOpen(false)} className="text-white w-7 h-7 md:hidden" />
          ) : (
            <Menu onClick={() => setOpen(true)} className="text-white w-7 h-7 md:hidden" />
          )}
        </div>
      </div>

      {/* Mobile Navigation */}
      <ResponsiveNavbar open={open} setOpen={setOpen} />
    </div>
    </>
  );
};

export default Navbar;
