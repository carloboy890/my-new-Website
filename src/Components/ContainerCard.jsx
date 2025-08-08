import React from "react";
import HomeDesign from "./HomeDesign";
import RightArrow from "../assets/RightArrow.png";
import LeftArrow from "../assets/LeftArrow.png";
import "./AboutContainer.css";
import { useNavigate } from "react-router-dom";

const ContainerCard = ({ onArrowRight, onArrowLeft, onClick, ...props }) => {
  const navigate = useNavigate();
  return (
    <HomeDesign>
      <div
        className="relative w-full h-screen text-white flex justify-center items-center font-Jost"
        onClick={onClick}
      >
        <div
          className="mb-10 w-[85%] h-[80vh] bg-black/50 
        max-2xl:h-[75vh]"
        >
          <button
            onClick={() => navigate("/resume")}
            className="animate-fade-in absolute top-26 right-230 z-50 text-white text-4xl font-bold px-3 rounded hover:bg-white/10 transition \
            max-2xl:text-3xl max-2xl:top-33 max-2xl:right-185
            max-xl:right-150"
          >
            ×
          </button>
          <div className="animate-pic-slide2 absolute top-8.5 left-29 h-[20%] w-[20%] max-2xl:invisible">
            <div className="h-0.5 w-[100%] mt-10 ml-[-30px] bg-white"></div>
            <div className="h-0.5 w-[100%] bg-white rotate-90 mt-34 ml-[-164px]"></div>
          </div>
          <div className="animate-pic-slide2 absolute bottom-21.5 left-29 h-[20%] w-[20%] max-2xl:invisible">
            <div className="h-0.5 w-[100%] mt-40 ml-[-30px] bg-white"></div>
            <div className="h-0.5 w-[100%] rotate-90 ml-[-164px] mt-[-150px] bg-white"></div>
          </div>
          <div className="w-[100%] h-[14%] pl-10 pr-10 pt-10">
            <div className="animate-sm-lg flex justify-between">
              <div
                className="text-[2.5rem] font-bold mb-3 
              max-2xl:text-[2rem]
              max-xl:text-[1.6rem]"
              >
                {props.title}
              </div>
              <div
                className="text-[2.5rem] font-bold 
              max-2xl:text-[2rem]
              max-xl:text-[1.6rem]"
              >
                {props.number}
              </div>
            </div>
            <div className="animate-sm-lg w-[100%] border-1 mr-auto ml-auto"></div>
          </div>
          <div sm cont className="w-[100%] h-[86%] flex">
            {props.id !== 1 && (
              <div left arrow className="z-5 animate-fade-in w-[5%] h-[100%]">
                <img
                  src={LeftArrow}
                  alt="Left Arrow"
                  onClick={(e) => {
                    e.stopPropagation();
                    onArrowLeft?.();
                  }}
                  className="h-[60px] w-[60px] mt-60 absolute cursor-pointer animate-arrow-backward
                  max-2xl:h-[40px] max-2xl:w-[40px]"
                />
              </div>
            )}
            <div
              logo
              className={`animate-sm-lg w-[20%] h-[100%] flex justify-center items-center
                max-2xl:w-[25%] ${props.isId2 ? "max-xl:w-[5%]" : "w-[26%]"}`}
            >
              {props.id !== 2 && (
                <img
                  src={props.logo}
                  alt={props.company + " logo"}
                  className={`w-[60%] mr-8 ${
                    props.isId2 ? "max-2xl:w-[10%]" : ""
                  } ${props.isId3 ? "max-xl:ml-35 max-xl:mt-[-40px]" : null}`}
                />
              )}
            </div>
            <div
              line
              className="animate-sm-lg w-[1%] h-[95%] mt-11 
            max-xl:invisible"
            >
              <div className="w-[30px] h-[30px] ml-[-25px] mt-1 bg-white rounded-full"></div>
              <div
                className={`border-r2 w-[20%] bg-white ml-[-12px] ${
                  props.isId2 || props.isId3 ? "h-[85%]" : "h-[85%]"
                } `}
              ></div>
            </div>
            <div
              className={`animate-sm-lg h-[100%] w-[60%] pt-10 pl-4 pr-4
            max-2xl:pt-11
            ${props.isId2 ? "max-xl:ml-22 max-xl:mt-4" : null} ${
                props.isId3 ? "max-xl:ml-8 max-xl:mt-5" : null
              }`}
            >
              <div cont>
                <div
                  title
                  className="text-[1.8rem] font-bold 
                  max-2xl:text-[1.5rem]"
                >
                  {" "}
                  {props.company}
                </div>
                <div
                  work
                  className="flex space-x-4 text-[1.3rem] mt-[2%] mb-[2%] 
                  max-2xl:text-[1.1rem]"
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
                    max-2xl:text-[0.9rem] ${props.isId1 ? "max-xl:mb-6" : ""}`}
                >
                  {props.date}
                </div>
                <div
                  className="text-[1rem] text-justify mb-10
                  max-xl:mb-6
                max-2xl:text-[0.9rem]"
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
                  max-2xl:text-[1.3rem]"
                  >
                    {props.skillTitle}
                  </div>
                  <ul
                    className={`list-disc ml-5 space-y-2 text-[0.9rem] 
                      max-2xl:text-[0.8rem] ${
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
                  max-2xl:text-[1.3rem]"
                  >
                    {props.softwareTitle}
                  </div>
                  <ul
                    className={`list-disc ml-5 space-y-2 text-[0.9rem] 
                      max-2xl:text-[0.8rem] ${
                        props.isId2 || props.isId3 ? "mt-12 space-y-4" : ""
                      } `}
                  >
                    {props.li5 && <li>{props.li5}</li>}
                    {props.li6 && <li>{props.li6}</li>}
                    {props.li7 && <li>{props.li7}</li>}
                  </ul>
                </div>
              </div>
            </div>
            {props.id !== 3 && (
              <div className="h-[100%] w-[9%] animate-fade-in left-10">
                <img
                  src={RightArrow}
                  alt="Right Arrow"
                  onClick={(e) => {
                    e.stopPropagation();
                    onArrowRight?.();
                  }}
                  className={`h-[60px] absolute z-5 w-[60px] mt-60 ml-20 cursor-pointer animate-arrow-forward 
                    max-2xl:h-[40px] max-2xl:w-[40px]`}
                />
              </div>
            )}
          </div>
          <div
            className="animate-pic-slide absolute top-8.5 right-29 h-[20%] w-[20%] 
          max-2xl:invisible"
          >
            <div className=" h-0.5 w-[100%] mt-10 ml-[30px] bg-white"></div>
            <div className="h-0.5 w-[100%] bg-white rotate-90 mt-34 ml-[164px]"></div>
          </div>
          <div
            className="animate-pic-slide absolute bottom-21.5 right-29 h-[20%] w-[20%]
          max-2xl:invisible"
          >
            <div className="h-0.5 w-[100%] mt-40 ml-[30px] bg-white"></div>
            <div className="h-0.5 w-[100%] rotate-90 ml-[164px] mt-[-150px] bg-white"></div>
          </div>
        </div>
      </div>
    </HomeDesign>
  );
};

export default ContainerCard;
