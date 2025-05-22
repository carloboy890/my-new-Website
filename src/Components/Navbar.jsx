import "./Navbar.css";
import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "./AboutContainer.css";

const Navbar = () => {
  return (
    <div className="relative animate-upper-slide font-Jost z-50 w-[100%] text-white flex justify-between pt-10">
      <div className="w-[18%]">
        <Link to="/" className="justify-end flex"></Link>
      </div>
      <ul className="z-50 justify-end w-[64%] text-shadow-lg/30 list-none font-[500] flex space-x-25 text-[18px] pt-4">
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
      <div className="w-[14%] relative pt-2 flex">
        <div className="max-2xl:block hidden border-1 rounded-[7px] ml-10 w-12 h-12 pl-3.5 pt-3.5 shadow-buttonShadow">
          <FaBars className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
