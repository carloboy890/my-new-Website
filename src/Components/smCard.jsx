import React from "react";
import "./AboutContainer.css";

const SmCard = ({ title, description, text, bg, path, onClick, a4 }) => {
  return (
    <>
      <div
        className={`animate-sm-lg w-[100%] p-6 border-white ${bg} hover:shadow-buttonShadow transition-shadow duration-100 delay-100`}
      >
        <div className="text-[2.2rem] font-bold text-white 
        max-2xl:text-[1.5rem]">
          {title}
        </div>
        <div className="text-white text-[1rem] pt-5 text-justify 
        max-2xl:h-[3.5rem] max-2xl:max-h-[6rem] max-2xl:text-[0.8rem]">
          {description}
        </div>
        <div
          onClick={onClick}
          className="inline-block border border-white px-4 py-2 cursor-pointer group 
          max-2xl:mt-18 mt-14"
        >
          <div className={`relative inline-block ${a4}`}>
            <span className="text-white text-[0.9rem] z-10 relative 
            max-2xl:text-[0.7rem]">
              {text}
            </span>
            <span className="absolute left-0 bottom-0 h-0.5 bg-white w-0 group-hover:w-full transition-all duration-300"></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SmCard;
