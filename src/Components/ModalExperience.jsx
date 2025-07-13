import React from "react";
import HomeDesign from "./HomeDesign";
import "./AboutContainer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const ModalExperience = ({ title, onClose, children }) => {
  return (
    <div className="animate-fade-in text-white fixed top-0 left-0 z-50 w-[100%] h-[100vh] bg-black/100 flex justify-center items-center border-white font-Jost ">
      {/* <HomeDesign> */}
      <div className="w-[85%] h-[80vh] flex justify-center bg-red-400 items-center">
        <button
          onClick={onClose}
          className="animate-sm-lg absolute top-[-30px] right-20 text-white text-4xl z-50 hover:text-gray-300 transition-colors"
          aria-label="Close modal"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <div className="animate-pic-slide2 absolute top-8.5 left-29 h-[20%] w-[20%] max-xl:left-33">
          <div className="h-0.5 w-[100%] mt-10 ml-[-30px] bg-white max-xl:ml-[-80px]"></div>
          <div className="h-0.5 w-[100%] bg-white rotate-90 mt-34 ml-[-164px] max-xl:mt-20"></div>
        </div>
        <div className="animate-pic-slide2 absolute bottom-21.5 left-29 h-[20%] w-[20%] max-xl:left-33">
          <div className="h-0.5 w-[100%] mt-40 ml-[-30px] bg-white max-xl:ml-[-80px]"></div>
          <div className="h-0.5 w-[100%] rotate-90 ml-[-164px] mt-[-150px] bg-white max-xl:-mt-22"></div>
        </div>
        <div className="relative">{children}</div>
      </div>
      <div className="animate-pic-slide1 absolute top-[-110px] right-0 h-[20%] w-[20%]">
        <div className=" h-1 w-[100%] mt-10 ml-[-1px] bg-white"></div>
        <div className="h-1 w-[100%] bg-white rotate-90 mt-36.5 ml-41"></div>
      </div>
      <div className="animate-pic-slide1 absolute bottom-[-50px] right-0 h-[20%] w-[20%]">
        <div className="h-1 w-[100%] mt-40 ml-[-1px] bg-white"></div>
        <div className="h-1 w-[100%] rotate-90 ml-41 mt-[-150px] bg-white"></div>
      </div>
      {/* </HomeDesign> */}
    </div>
  );
};

export default ModalExperience;
