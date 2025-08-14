import "./HomeContainer.css";
import React, { useEffect } from "react";
import "./AboutContainer.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import profilePic from "../assets/NewDesignPic1.png";
import playButton from "../assets/playButton.gif";
import arrowView from "../assets/arrowView.gif";

const HomeContainer = () => {
  const location = useLocation();
  const [lineExpanded, setLineExpanded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLineExpanded(true);
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    document.getElementById("homeText").classList.add("animate-pic-slide");
  }, [location]);
  return (
    <div
      className="animate-fade-in relative h-[76.5vh] flex w-full text-white max-w-screen-2xl
    max-2xl:max-w-screen-xl
    max-xl:max-w-screen-lg
    max-lg:max-w-screen-md"
    >
      <div className="w-[10%]"></div>
      <div
        className="pt-30 w-[40%] font-Jost 
      max-lg:left-40 max-lg:w-full max-lg:absolute max-lg:pt-30"
      >
        <div className="fade-cont line-container animate-pic-slide w-[70%]">
          <p
            className="fade text-[1.5rem] text-white 
          max-2xl:text-[1.5rem] max-lg:z-10 max-lg:"
          >
            Currently Available For Freelance Worldwide{" "}
            <span className="ml-5">
              <FontAwesomeIcon icon={faSquareArrowUpRight} />
            </span>{" "}
          </p>
          <div className="line bg-white w-[22rem] h-1 mt-4"></div>
        </div>
        <div
          id="homeText"
          className="motion-safe:motion-fade-in w-[110%] scale-x-110 font-Jost ml-10 text-base/18 mt-[6rem] text-[3.5rem] text-white
            max-2xl:w-[80%] max-2xl max-2xl:text-[2rem] max-2xl:text-base/13
            max-lg:text-base/16 max-lg:w-[100%]"
        >
          <p
            className="text-[1.8rem] 
          max-2xl:text-[1.6rem]
          max-lg:text-[2rem]"
          >
            Hi! I'm
          </p>
          <p
            className="animate-bounce 
          max-lg:text-[2.5rem]"
          >
            CARLO DAMALERIO,
          </p>
          <p className="max-lg:text-[2.5rem] max-lg:w-[70%]">
            A JUNIOR FRONT-END DEVELOPER
          </p>
        </div>
        <div className="animate-pic-slide mt-10 flex">
          <div>
            <img
              src={arrowView}
              alt="arrowView"
              className="max-2xl:w-[100%] max-2xl:h-[80px]
              max-lg:w-120 max-lg:h-[100px]"
            />
          </div>
          <div className="">
            <div playback>
              <img
                src={playButton}
                alt="playButton"
                className="h-[110px] w-[110px] 
                max-2xl:w-[100px] max-2xl:h-[90px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div design index-1></div>
      <div className="animate-pic-slide2 relative w-[40%]">
        <div
          className="absolute bottom-5 w-[48rem] h-full 
        max-2xl:w-[42rem] max-2xl:h-[45rem]
        max-xl:w-[38rem] max-xl:h-[45rem]
        max-lg:hidden"
        >
          <img
            className="opacity-90 absolute left-[1px] w-[100rem] h-[55rem]"
            src={profilePic}
            alt="MyPic"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeContainer;
