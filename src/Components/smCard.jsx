import React from "react";
import "./AboutContainer.css";

const SmCard = ({ title, description, text, bg, path, onClick }) => {
  return (
    <>
      <div
        className={`animate-sm-lg w-full pt-6 pl-8 pr-8 border-white ${bg} hover:shadow-buttonShadow transition-shadow duration-100 delay-100 flex flex-col justify-between h-full`}
      >
        <div>
          <div
            className="text-[2.2rem] font-bold text-white 
          max-2xl:text-[1.8rem]
          max-xl:text-[1.5rem]"
          >
            {title}
          </div>
          <div
            className="text-white text-[0.9rem] pt-5 text-justify text-base/7
           max-2xl:h-[3.5rem] max-2xl:text-[0.8rem] max-2xl:text-base/6
           max-xl:text-[0.7rem] max-xl:text-base/5"
          >
            {description}
          </div>
        </div>

        <div
          onClick={onClick}
          className={`text-center inline-block border w-37 border-white px-4 py-2 cursor-pointer group mb-10
             max-2xl:mt-18 max-xl:mt-27
             max-xl:mb-6`}
        >
          <div className="relative inline-block">
            <span
              className="text-white text-[0.9rem] z-10 relative 
            max-2xl:text-[0.7rem]"
            >
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
