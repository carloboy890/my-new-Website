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
        <div className="mb-10 w-[85%] h-[80vh] bg-black/50">
          <button
            onClick={() => navigate("/resume")}
            className="animate-fade-in absolute top-26 right-230 z-50 text-white text-5xl font-bold px-3 rounded hover:bg-white/10 transition"
          >
            ×
          </button>
          <div className="animate-pic-slide2 absolute top-8.5 left-29 h-[20%] w-[20%] max-xl:left-33">
            <div className="h-0.5 w-[100%] mt-10 ml-[-30px] bg-white max-xl:ml-[-80px]"></div>
            <div className="h-0.5 w-[100%] bg-white rotate-90 mt-34 ml-[-164px] max-xl:mt-20"></div>
          </div>
          <div className="animate-pic-slide2 absolute bottom-21.5 left-29 h-[20%] w-[20%] max-xl:left-33">
            <div className="h-0.5 w-[100%] mt-40 ml-[-30px] bg-white max-xl:ml-[-80px]"></div>
            <div className="h-0.5 w-[100%] rotate-90 ml-[-164px] mt-[-150px] bg-white max-xl:-mt-22"></div>
          </div>
          <div className="w-[100%] h-[14%] pl-10 pr-10 pt-10">
            <div className="animate-sm-lg flex justify-between">
              <div className="max-xl:text-[2rem] text-[2.5rem] font-bold mb-3">
                {props.title}
              </div>
              <div className="max-xl:text-[2rem] text-[2.5rem] font-bold">
                {props.number}
              </div>
            </div>
            <div className="animate-sm-lg w-[100%] border-1 mr-auto ml-auto"></div>
          </div>
          <div sm cont className="relative w-[100%] h-[86%] flex">
            {props.id !== 1 && (
              <div left arrow className="z-5 animate-fade-in w-[5%] h-[100%]">
                <img
                  src={LeftArrow}
                  alt="Left Arrow"
                  onClick={(e) => {
                    e.stopPropagation();
                    onArrowLeft?.();
                  }}
                  className="max-xl:h-[40px] max-xl:w-[40px] max-xl:left-[-180px] h-[60px] w-[60px] mt-60 absolute left-40 cursor-pointer animate-arrow-backward"
                />
              </div>
            )}
            <div
              logo
              className={` border-1 max-xl:w-[20%] animate-sm-lg w-[20%] h-[100%] flex justify-center items-center ${
                props.isId2 ? "max-xl:w-[5%]" : "w-[26%]"
              }`}
            >
              {props.id !== 2 && (
                <img
                  src={props.logo}
                  alt={props.company + " logo"}
                  className={`w-[60%] mr-8 ${
                    props.isId2 ? "max-xl:w-[10%]" : ""
                  }`}
                />
              )}
            </div>
            <div line className="animate-sm-lg w-[1%] h-[100%] mt-11">
              <div className="w-[30px] h-[30px] ml-[-25px] mt-1 bg-white rounded-full"></div>
              <div
                className={`border-r2 w-[20%] bg-white ml-[-12px] ${
                  props.isId2 || props.isId3 ? "h-[85%]" : "h-[85%]"
                } `}
              ></div>
            </div>
            <div className="border-1 animate-sm-lg h-[100%] w-[60%] pt-10 pl-4 pr-4">
              <div cont>
                <div
                  title
                  className="max-xl:text-[1.5rem] text-[2rem] font-bold"
                >
                  {" "}
                  {props.company}
                </div>
                <div
                  work
                  className="max-xl:text-[1.1rem] flex space-x-4 text-[1.5rem] mt-[3%] mb-[2.5%]"
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
                  className={`max-xl:text-[1.1rem] text-[1.5rem] mb-[5%] ${
                    props.isId1 ? "max-xl:mb-[10%]" : ""
                  }`}
                >
                  {props.date}
                </div>
                <div
                  desc
                  className="max-xl:text-[1rem] text-[1.1rem] text-justify mb-10"
                >
                  {props.description}
                </div>
                <div line className="h-0.5 border-1 mb-10"></div>
              </div>
              <div cont className="flex justify-between">
                <div skill cont>
                  <div className=" max-xl:text-[1.2rem] font-bold text-[1.5rem] mb-6">
                    {props.skillTitle}
                  </div>
                  <ul
                    className={`max-xl:text-[0.8rem] list-disc ml-5 space-y-2 text-[0.9rem] ${
                      props.isId2 || props.isId3 ? "space-y-6" : ""
                    }`}
                  >
                    {props.li1 && <li>{props.li1}</li>}
                    {props.li2 && <li>{props.li2}</li>}
                    {props.li3 && <li>{props.li3}</li>}
                    {props.li4 && <li>{props.li4}</li>}
                  </ul>
                </div>
                <div software cont>
                  <div className="max-xl:text-[1.2rem] font-bold text-[1.5rem] mb-6">
                    {props.softwareTitle}
                  </div>
                  <ul
                    className={`max-xl:text-[0.8rem] list-disc ml-5 space-y-2 text-[0.9rem] ${
                      props.isId2 || props.isId3 ? "mt-12 space-y-8" : ""
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
              <div className="relative h-[100%] w-[9%] animate-fade-in">
                <img
                  src={RightArrow}
                  alt="Right Arrow"
                  onClick={(e) => {
                    e.stopPropagation();
                    onArrowRight?.();
                  }}
                  className={`max-xl:h-[40px] max-xl:w-[40px] h-[60px] z-5 w-[60px] right-[500px] max-xl:right-5 mt-60 absolute cursor-pointer animate-arrow-forward
                  `}
                />
              </div>
            )}
          </div>
          <div className="animate-pic-slide absolute top-8.5 right-29 h-[20%] w-[20%] max-xl:right-33">
            <div className=" h-0.5 w-[100%] mt-10 ml-[30px] bg-white max-xl:ml-20"></div>
            <div className="h-0.5 w-[100%] bg-white rotate-90 mt-34 ml-[164px] max-xl:mt-20"></div>
          </div>
          <div className="animate-pic-slide absolute bottom-21.5 right-29 h-[20%] w-[20%] max-xl:right-33">
            <div className="h-0.5 w-[100%] mt-40 ml-[30px] bg-white max-xl:ml-20"></div>
            <div className="h-0.5 w-[100%] rotate-90 ml-[164px] mt-[-150px] bg-white max-xl:mt-[-88px]"></div>
          </div>
        </div>
      </div>
    </HomeDesign>
  );
};

export default ContainerCard;
