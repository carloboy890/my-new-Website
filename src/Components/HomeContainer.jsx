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
    <div className="animate-fade-in relative h-[76.5vh] flex w-[100%] text-white">
      <div className="w-[10%]"></div>
      <div className="pt-30 w-[40%] font-Jost">
        <div className="fade-cont line-container animate-pic-slide w-[60%]">
          <p className="fade text-[1.5rem] text-white ">
            Currently Available For Freelance Worldwide{" "}
            <span className="ml-5">
              <FontAwesomeIcon icon={faSquareArrowUpRight} />
            </span>{" "}
          </p>
          <div className="line bg-white w-[22rem] h-1 mt-4"></div>
        </div>
        <div
          id="homeText"
          className="motion-safe:motion-fade-in w-[110%] scale-x-110 font-Jost ml-10 text-base/18 mt-[6rem] text-[3.5rem] text-white"
        >
          <p className="text-[1.8rem] ">Hi! I'm</p>
          <p className="animate-bounce">CARLO DAMALERIO,</p>
          <p>A JUNIOR FRONT-END DEVELOPER</p>
        </div>
        <div className="animate-pic-slide mt-10 flex">
          <div>
            <img src={arrowView} alt="" />
          </div>
          <div className="">
            <div playback>
              <img
                src={playButton}
                alt="playButton"
                className="h-[110px] w-[110px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div design index-1></div>
      <div className="animate-pic-slide2 relative w-[40%]">
        <div className="absolute bottom-5 w-[48rem] h-[45rem]">
          <img
            className="opacity-90 absolute left-[1px] w-[100rem] h-[55rem]"
            src={profilePic}
            alt="MyPic"
          />
        </div>
      </div>
      <div className="w-[10%] pt-65">
        {/* <p className="font-Jost rotate-90 text-[1.4rem] text-white ml-25">
          FOLLOW ME
        </p>
        <div className="">
          <img className="w-30 h-40 ml-30.5 mt-15" src={Arrow} alt="Arrow" />
        </div>
        <div Fb Icon></div>
        <div Twitter Icon></div>
        <div Instagram Icon></div>
        <div LinkedIn Icon></div> */}
      </div>
    </div>
  );
};

export default HomeContainer;
