import React, { useState, useRef } from "react";
import { animate } from "motion";
import HomeDesign from "./HomeDesign";
import RightArrow from "../assets/RightArrow.png";
import LeftArrow from "../assets/LeftArrow.png";
import "./AboutContainer.css";
import { useNavigate } from "react-router-dom";

const ContainerCard = ({
  onArrowRight,
  onArrowLeft,
  onArrowDown,
  onClick,
  ...props
}) => {
  const navigate = useNavigate();

  return (
    <HomeDesign>
      <div
        className="relative w-full h-screen text-white flex justify-center items-center font-Jost"
        onClick={onClick}
      >
        {/* sm container */}
        <div
          className="absolute mb-10 w-full h-[80vh] bg-black/50 max-w-screen-2xl
        max-2xl:h-[75vh] max-2xl:max-w-screen-xl 
        max-xl:max-w-screen-lg max-xl:h-[70vh]
        max-lg:max-w-screen-md"
        >
          {/* Line Design */}
          <div className="animate-pic-slide2 absolute top-[-40px] left-[-13px] h-[20%] w-[20%] max-2xl:invisible">
            <div className="h-0.5 w-90 mt-10 ml-[-30px] bg-white"></div>
            <div className="h-0.5 w-90 bg-white rotate-90 mt-34 ml-[-164px]"></div>
          </div>
          <div className="animate-pic-slide2 absolute bottom-2.5 left-[-13px] h-[20%] w-[20%] max-2xl:invisible">
            <div className="h-0.5 w-90 mt-40 ml-[-30px] bg-white"></div>
            <div className="h-0.5 w-90 rotate-90 ml-[-164px] mt-[-150px] bg-white"></div>
          </div>
          <div className="w-[100%] h-[14%] pl-10 pr-10 pt-6">
            <div className="animate-sm-lg flex justify-between">
              <div
                className="text-[2.5rem] font-bold mb-3 
              max-2xl:text-[1.6rem]
              max-xl:text-[1.6rem]"
              >
                {props.title}
              </div>
              <button
                onClick={() => navigate("/resume")}
                className="h-10 w-auto animate-fade-in z-50 text-white text-4xl font-bold px-3 rounded hover:bg-white/10 transition
            max-2xl:text-3xl max-2xl:top-15 max-2xl:right-185
            max-xl:right-150"
              >
                ×
              </button>
              <div
                className="text-[2.5rem] font-bold 
              max-2xl:text-[1.6rem]
              max-xl:text-[1.6rem]"
              >
                {props.number}
              </div>
            </div>
            <div className="animate-sm-lg w-[100%] border-1 mr-auto ml-auto"></div>
          </div>
          {/* Content Container */}
          <div className="w-full h-[86%] flex">
            {/* Left Container */}
            <div
              logo
              className={`animate-sm-lg max-w-[30%] h-[100%] flex justify-center items-center
              max-2xl:w-[25%] 
              max-lg:items-center max-lg:flex max-lg:flex-col max-lg:justify-around
              ${props.isId2 ? "w-[30%]" : null}`}
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
                      onArrowLeft?.();
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
                {/* Left Arrow */}
                {props.id !== 1 && (
                  <div left arrow className="z-5 animate-fade-in">
                    <img
                      src={LeftArrow}
                      alt="Left Arrow"
                      onClick={(e) => {
                        e.stopPropagation();
                        onArrowLeft?.();
                      }}
                      className={`h-[60px] w-[60px] absolute -ml-38 -mt-5 cursor-pointer animate-arrow-backward
                      max-2xl:h-[40px] max-2xl:w-[40px] 
                      max-lg:invisible ${
                        props.isId2
                          ? "-mt-21 max-2xl:-mt-17 max-xl:-mt-12"
                          : null
                      }
                       ${props.isId3 ? "max-xl:-mt-0" : null}`}
                    />
                  </div>
                )}
                {/* Logo */}
                <div
                  className={`w-[50%] ${
                    props.isId3 ? "w-[70%] max-xl:ml-5 max-lg:-mt-50" : null
                  }`}
                >
                  {props.id !== 2 && (
                    <img
                      src={props.logo}
                      alt={props.company + " logo"}
                      className={`w-full ${props.isId2 ? "max-2xl:w-[10%]" : ""}
                      ${props.isId1 ? "max-lg:mt-25" : null}
                      ${props.isId3 ? "max-lg:ml-5" : null}
                      `}
                    />
                  )}
                </div>
              </div>
              {/* Down Arrow */}
              {props.id !== 3 && (
                <div
                  className="animate-fade-in invisible
              max-xl:visible
              max-lg:flex max-lg:justify-center"
                >
                  <img
                    src={RightArrow}
                    alt="Down + Arrow"
                    onClick={(e) => {
                      e.stopPropagation();
                      onArrowDown?.();
                    }}
                    className={`h-[60px] z-5 absolute cursor-pointer animate-arrow-downward 
                    max-2xl:h-[40px] max-2xl:w-[40px]
                    max-xl:invisible
                    max-lg:rotate-90 max-lg:visible max-lg:-mb-15`}
                  />
                </div>
              )}
            </div>
            {/* Line container */}
            <div
              line
              className="relative animate-sm-lg w-[3%] h-[100%]
            max-xl:invisible"
            >
              <div
                className="ml-1 mt-10 
              max-2xl:mt-5"
              >
                <div className="absolute w-[30px] h-[30px] mt-1 bg-white rounded-full"></div>
                <div
                  className={`absolute w-[5%] bg-white ml-3.5 mt-1 ${
                    props.isId2 || props.isId3 ? "h-[85%]" : "h-[85%]"
                  } `}
                ></div>
              </div>
            </div>
            {/* Text container */}
            <div
              className={`animate-sm-lg h-[100%] w-[67%] p-10
            max-2xl:pt-6
            max-lg:pt-1 max-lg:animate-swipe-up
            ${props.isId2 || props.isId3 ? "max-lg:pt-10" : null}`}
            >
              <div className="">
                <div
                  title
                  className="text-[1.8rem] font-bold 
                  max-2xl:text-[1.5rem] 
                  max-lg:text-[1.3rem]"
                >
                  {" "}
                  {props.company}
                </div>
                <div
                  work
                  className="flex space-x-4 text-[1.3rem] mt-[2%] mb-[2%] 
                  max-2xl:text-[1.1rem]
                  max-lg:text-[0.9rem]"
                >
                  <div>{props.job}</div>
                  {props.id !== 2 && (
                    <>
                      <div>/</div>
                      <div fulltime>{props.employmentType}</div>
                      <div>/</div>
                      <div freelance>{props.locationType}</div>
                    </>
                  )}
                </div>
                <div
                  date
                  className={`text-[1.2rem] mb-[3%]
                    max-2xl:text-[0.85rem] ${props.isId1 ? "max-xl:mb-6" : ""}`}
                >
                  {props.date}
                </div>
                <div
                  className="text-[1rem] text-justify mb-10
                  max-xl:mb-6
                max-2xl:text-[0.9rem] 
                max-lg:text-[0.8rem]"
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
                  max-lg:mb-3"
                  >
                    {props.skillTitle}
                  </div>
                  <ul
                    className={`list-disc ml-5 space-y-2 text-[0.9rem] 
                      max-2xl:text-[0.8rem]
                      max-lg:text-[0.65rem] ${
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
                  max-lg:mb-3"
                  >
                    {props.softwareTitle}
                  </div>
                  <ul
                    className={`list-disc ml-5 space-y-2 text-[0.9rem] 
                      max-2xl:text-[0.8rem] 
                      max-lg:text-[0.65rem] ${
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
                    onArrowRight?.();
                  }}
                  className={`h-[60px] absolute z-5 w-[60px] mt-60 mr-[-150px] cursor-pointer animate-arrow-forward 
                    max-2xl:h-[40px] max-2xl:w-[40px]
                    max-lg:invisible`}
                />
              </div>
            )}
          </div>
          {/* Lines Design */}
          <div
            className="animate-pic-slide absolute top-[-40px]  right-9.5 h-[20%] w-[20%] 
          max-2xl:invisible"
          >
            <div className=" h-0.5 w-90 mt-10 ml-[30px] bg-white"></div>
            <div className="h-0.5 w-90 bg-white rotate-90 mt-34 ml-[164px]"></div>
          </div>
          <div
            className="animate-pic-slide absolute bottom-2.5 right-9.5 h-[20%] w-[20%]
          max-2xl:invisible"
          >
            <div className="h-0.5 w-90 mt-40 ml-[30px] bg-white"></div>
            <div className="h-0.5 w-90 rotate-90 ml-[164px] mt-[-150px] bg-white"></div>
          </div>
        </div>
      </div>
    </HomeDesign>
  );
};

export default ContainerCard;
