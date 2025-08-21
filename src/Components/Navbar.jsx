import "./Navbar.css";
import React, {useState} from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import { FaFolder } from "react-icons/fa6";
import { FaAddressBook } from "react-icons/fa6";
import "./AboutContainer.css";

const Navbar = () => {

  const [openNav, setOpenNav] = useState(false)

  function navOpen() {
    if(!openNav) {
      setOpenNav(true)
    }
  }

  return (
    <div className="relative animate-upper-slide font-Jost z-50 w-full text-white flex justify-center pt-10
    max-md:justify-center">
      <ul
        className="z-50 justify-center w-[64%] text-shadow-lg/30 list-none font-[500] flex space-x-25 text-[1.2rem] pt-4 max-w-screen-2xl
      max-2xl:text-[1.2rem] max-2xl:max-w-screen-xl
      max-xl:justify-center max-xl:text-[1.1rem] max-xl:max-w-screen-lg
      max-lg:max-w-screen-md
      max-md:hidden max-md:max-w-screen-sm"
      >
        <li className="fade-cont line-container relative inline-block">
          <Link to="/" className="inline-block">
            <span className="fade text-white">HOME</span>
            <span className="line absolute left-0 -bottom-1 h-[2px] bg-white"></span>
          </Link>
        </li>
        <li className="fade-cont line-container relative inline-block">
          <Link to="/about" className="inline-block">
            <span className="fade text-white">ABOUT</span>
            <span className="line absolute left-0 -bottom-1 h-[2px] bg-white"></span>
          </Link>
        </li>
        <li className="fade-cont line-container relative inline-block">
          <Link to="/resume" className="inline-block">
            <span className="fade text-white">RESUME</span>
            <span className="line absolute left-0 -bottom-1 h-[2px] bg-white"></span>
          </Link>
        </li>
        <li className="fade-cont line-container relative inline-block">
          <Link to="/contact" className="inline-block">
            <span className="fade text-white">CONTACT</span>
            <span className="line absolute left-0 -bottom-1 h-[2px] bg-white"></span>
          </Link>
        </li>
      </ul>
      <ul className="max-md:flex max-md:w-3/4 max-md:h-16 max-md:justify-between max-md:rounded-3xl max-md:bg-[#242424]/60 hidden">
        <li className="max-md:w-full max-md:flex max-md:justify-center max-md:items-center">
          <Link to="/">
          <span><FaHouse className="invisible max-md:visible max-md:h-[20px] max-md:w-[20px]"/></span>
          </Link>
        </li>
        <li className="max-md:w-full max-md:flex max-md:justify-center max-md:items-center">
          <Link to="/about">
          <span><FaUser className="invisible max-md:visible max-md:h-[20px] max-md:w-[20px]"/></span>
          </Link>
        </li>
        <li className="max-md:w-full max-md:flex max-md:justify-center max-md:items-center">
          <Link to="/resume">
          <span><FaFolder className="invisible max-md:visible max-md:h-[20px] max-md:w-[20px]"/></span>
          </Link>
        </li>
        <li className="max-md:w-full max-md:flex max-md:justify-center max-md:items-center">
          <Link to="/contact">
          <span><FaAddressBook className="invisible max-md:visible max-md:h-[20px] max-md:w-[20px]"/></span>
          </Link>
        </li>
      </ul>
      {/* <div className="w-[14%] relative pt-2 flex  
      max-md:mr-13 max-md:mt-5 max-md:cursor-pointer">
        <div className="max-lg:block hidden border-1 rounded-[7px] ml-10 w-12 h-12 pl-3.5 pt-3.5 shadow-buttonShadow">
          <FaBars className="w-5 h-5" />
        </div>
      </div> */}
    </div>
  );
};

export default Navbar;
