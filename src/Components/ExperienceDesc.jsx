import React from "react";
import RightArrow from "../assets/RightArrow.png";
import LeftArrow from "../assets/LeftArrow.png";
import ContainerCardDesc from "./ContainerCardDesc";

const ExperienceDesc = (props) => {
  return (
    <div className="w-full">
      <div
        className="flex
          max-md:flex-col h-full
          "
      >
        {/* Left Arrow */}
        {props.id !== 1 && (
          <div
            left
            arrow
            className="h-full w-[9%] animate-fade-in
                  max-lg:hidden
                  max-xl:z-20"
          >
            <img
              src={LeftArrow}
              alt="Left Arrow"
              onClick={(e) => {
                e.stopPropagation();
                props.onArrowLeft?.();
              }}
              className={`h-[60px] w-[60px] absolute ml-[-150px] z-5 cursor-pointer animate-arrow-backward
                      max-2xl:h-[40px] max-2xl:w-[40px] 
                      max-lg:invisible ${props.isId2 ? "mt-65" : null}
                       ${props.isId3 ? "mt-65" : null}`}
            />
          </div>
        )}
        {/* Left Container */}
        <div
          logo
          className={`animate-sm-lg max-w-[20%] max-h-full flex justify-center items-center
              max-2xl:w-[25%] 
              max-lg:items-center max-lg:ml-10 max-lg:flex max-lg:flex-col max-lg:justify-around
              max-md:hidden
              ${props.isId2 ? "max-2xl:-ml-20 w-[10%]" : null}
              ${props.isId3 ? "-ml-20" : null}`}
        >
          {/* Up Arrow */}
          {props.id !== 1 && (
            <div
              className={`z-5 animate-fade-in w-full invisible
              max-xl:visible 
              max-lg:flex max-lg:justify-center 
              ${props.isId1 ? "max-lg:hidden" : ""}`}
            >
              <img
                src={LeftArrow}
                alt="Up + Arrow"
                onClick={(e) => {
                  e.stopPropagation();
                  props.onArrowLeft?.();
                }}
                className={`h-[60px] w-[60px] absolute cursor-pointer animate-arrow-upward
                  max-2xl:h-[40px] max-2xl:w-[40px]
                  max-xl:invisible
                  max-lg:rotate-90 max-lg:visible max-lg:mt-70`}
              />
            </div>
          )}
          <div
            className={`flex ${props.isId1 ? "justify-center" : null}
                `}
          >
            {/* Logo */}
            <div
              className={`w-1/2
                  max-md:hidden ${
                    props.isId3 ? "w-[70%] max-xl:ml-5 max-lg:-mt-50" : null
                  }`}
            >
              {props.id !== 2 && (
                <img
                  src={props.logo}
                  alt={props.company + " logo"}
                  className={`w-full ${props.isId2 ? "max-2xl:w-[10%]" : ""}
                      ${props.isId1 ? "max-lg:mt-25" : null}
                      ${props.isId3 ? "" : null}
                      `}
                />
              )}
            </div>
          </div>
          {/* Down Arrow */}
          {props.id !== 3 && (
            <div
              className="animate-fade-in hidden
              max-xl:block
              max-lg:flex max-lg:justify-center"
            >
              <img
                src={RightArrow}
                alt="Down + Arrow"
                onClick={(e) => {
                  e.stopPropagation();
                  props.onArrowDown?.();
                }}
                className={`h-[60px] z-5 absolute cursor-pointer animate-arrow-downward 
                    max-2xl:h-[40px] max-2xl:w-[40px]
                    max-xl:invisible
                    max-lg:rotate-90 max-lg:visible max-lg:-mb-10 ${
                      props.isId2 ? "max-lg:-mb-24" : null
                    }`}
              />
            </div>
          )}
        </div>
        {/* Line container */}
        <div
          line
          className=" animate-sm-lg w-[3%] max-h-[95%]
            max-2xl:mt-1
            max-xl:hidden"
        >
          <div
            className="ml-1 mt-10 h-full
              max-2xl:mt-5"
          >
            <div className="w-[30px] h-[30px] mt-2 bg-white rounded-full"></div>
            <div
              className={`rotate-180 h-[85%] w-[5%] bg-white ml-3.5
                  max-2xl:h-[85%]`}
            ></div>
          </div>
        </div>
        {/* Text container */}
        <div
          className={`animate-sm-lg w-[67%] p-10
            max-2xl:pt-6
            max-xl:mt-1
            max-lg:pt-1 max-lg:animate-swipe-up 
            max-md:mt-10 max-md:w-[90%] max-md:px-6 max-md:ml-10 max-md:border-1
            max-sm:ml-5
            ${props.isId1 ? "max-lg:pt-10" : ""}
            ${
              props.isId2 || props.isId3 ? "max-2xl:pt-13 max-lg:pt-10" : null
            }`}
        >
          <div className="">
            <div
              title
              className="text-[1.8rem] font-bold 
                  max-2xl:text-[1.5rem] 
                  max-lg:text-[1.2rem] max-lg:text-center
                  max-md:text-center max-md:mt-10"
            >
              {" "}
              {props.company}
            </div>
            <div
              work
              className={`flex space-x-2 text-[1.3rem] mt-[2%] mb-[2%]
                  max-2xl:text-[1.1rem]
                  max-lg:text-[0.77rem] max-lg:justify-around 
                  max-md:text-center
                  max-sm:text-[0.65rem]
                ${props.isId3 ? "max-lg:ml-5" : ""}`}
            >
              <div
                className="flex space-x-5
                max-lg:justify-center
                max-md:ml-10 
                max-sm:ml-5"
              >
                {props.job}
                {props.id !== 2 && (
                  <>
                    <span className="ml-5">/</span>
                    <div fulltime>{props.employmentType}</div>
                    <span className={`${props.isId3 && "hidden"}`}>/</span>
                    <div freelance>{props.locationType}</div>
                  </>
                )}
              </div>
            </div>
            <div
              date
              className={`text-[1.2rem] mb-[3%]
                    max-2xl:text-[0.77rem]
                    max-lg:text-center
                    max-md:text-center ${props.isId1 ? "max-xl:mb-6" : ""}
                    max-sm:text-[0.65rem]
                    ${props.isId2 || props.isId3 ? "max-lg:mb-10" : ""}`}
            >
              {props.date}
            </div>
            <div
              className="text-[1rem] text-justify mb-10
                max-xl:mb-6
                max-2xl:text-[0.9rem] 
                max-lg:text-[0.74rem] max-lg:text-center
                max-sm:text-xs/6"
            >
              {props.description.split("\n").map((line, index) => (
                <p key={index} className="mb-4">
                  {line}
                </p>
              ))}
            </div>
            <div
              line
              className="h-0.5 border-1 mb-10
                max-xl:mb-6"
            ></div>
          </div>
          <div cont className="flex justify-between">
            <div skill cont>
              <div
                className="font-bold text-[1.5rem] mb-6 
                  max-2xl:text-[1.3rem]
                  max-lg:mb-3 max-lg:text-[1.2rem]
                  max-sm:text-[1.1rem] max-sm:font-normal"
              >
                {props.skillTitle}
              </div>
              <ul
                className={`list-disc ml-5 space-y-2 text-[0.9rem] 
                      max-2xl:text-[0.8rem]
                      max-lg:text-[0.65rem] 
                      max-sm:text-[0.55rem] ${
                        props.isId2 || props.isId3 ? "space-y-4" : ""
                      }`}
              >
                {props.li1 && <li>{props.li1}</li>}
                {props.li2 && <li>{props.li2}</li>}
                {props.li3 && <li>{props.li3}</li>}
                {props.li4 && <li>{props.li4}</li>}
              </ul>
            </div>
            <div software cont>
              <div
                className="font-bold text-[1.5rem] mb-6 
                  max-2xl:text-[1.3rem] 
                  max-lg:mb-3 max-lg:text-[1.2rem]
                  max-sm:text-[1.1rem] max-sm:font-normal"
              >
                {props.softwareTitle}
              </div>
              <ul
                className={`list-disc ml-5 space-y-2 text-[0.9rem] 
                      max-2xl:text-[0.8rem] 
                      max-lg:text-[0.65rem] 
                      max-sm:text-[0.55rem] ${
                        props.isId2 || props.isId3
                          ? "mt-12 space-y-4 max-lg:mt-11"
                          : ""
                      } `}
              >
                {props.li5 && <li>{props.li5}</li>}
                {props.li6 && <li>{props.li6}</li>}
                {props.li7 && <li>{props.li7}</li>}
              </ul>
            </div>
          </div>
        </div>
        {/* Right Arrow */}
        {props.id !== 3 && (
          <div className="h-[100%] w-[9%] animate-fade-in">
            <img
              src={RightArrow}
              alt="Right Arrow"
              onClick={(e) => {
                e.stopPropagation();
                props.onArrowRight?.();
              }}
              className={`h-[60px] absolute z-5 w-[60px] mt-65 mr-[-150px] cursor-pointer animate-arrow-forward 
                    max-2xl:h-[40px] max-2xl:w-[40px]
                    max-lg:invisible`}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceDesc;
