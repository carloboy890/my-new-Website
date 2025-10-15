import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import playButton from "../assets/playButton.gif";
import arrowView from "../assets/arrowView.gif";
import myWorkplace1 from "../assets/myWorkplace1.mp4";
import { div } from "motion/react-client";

function HomeContainerCardDesc(props) {
  return (
    <div
      className="pt-25 -ml-15 w-2/5 font-Jost min-h-[70vh]
      max-lg:left-25 max-lg:w-auto max-lg:top-10 max-lg:absolute
      max-md:left-30
      max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:left-0 max-sm:-top-20 max-sm:w-full max-sm:ml-0"
    >
      {!props.showVideo && (
        <>
          <div
            className="fade-cont line-container animate-pic-slide w-full 
            max-md:text-center max-md:animate-none"
          >
            <p
              className="fade text-[1.5rem] text-white 
              max-2xl:text-[1.5rem]
              max-lg:z-10
              max-sm:text-[0.8rem]"
            >
              {props.availability}
              <span className="ml-5">
                <FontAwesomeIcon icon={faSquareArrowUpRight} />
              </span>
            </p>
            <div className="line bg-white w-[22rem] h-1 mt-4 max-md:hidden"></div>
          </div>

          <div
            id="homeText"
            className="animate-pic-slide w-[110%] scale-x-110 font-Jost ml-10 text-base/18 mt-10 text-[3.5rem] text-white
                max-2xl:w-[80%] max-2xl:text-[2rem]
                max-xl:text-[1.7rem] max-xl:text-base/15.5
                max-lg:text-base/16 max-lg:w-full
                max-md:text-center max-md:flex max-md:flex-col max-md:justify-center max-md:ml-0
                max-sm:text-base/12"
          >
            <p className="text-[1.8rem] max-2xl:text-[1.6rem] max-lg:text-[2rem] max-sm:text-[1rem]">
              {props.intro1}
            </p>
            <p className="animate-bounce max-lg:text-[2.5rem] max-sm:text-[1.2rem]">
              {props.intro2}
            </p>
            <p className="max-lg:text-[2.5rem] max-md:w-full max-md:text-[2.2rem] max-sm:text-[1.2rem]">
              {props.intro3}
            </p>
          </div>

          <div className="animate-pic-slide mt-5 flex max-md:flex-col max-md:space-y-10">
            <div>
              <img
                src={arrowView}
                alt="arrowView"
                className="max-2xl:w-full max-2xl:h-[80px]
                  max-lg:w-120 max-lg:h-[100px]
                  max-md:w-full max-md:p-3
                  max-sm:h-[80px] max-sm:p-1 max-sm:w-full"
              />
            </div>
            <div className="flex justify-center">
              <img
                src={playButton}
                alt="playButton"
                onClick={props.onShowVideo}
                className="h-[110px] w-[110px] 
                    max-2xl:w-[100px] max-2xl:h-[90px]
                    max-md:h-[130px] max-md:w-[130px] 
                    max-sm:h-[100px] max-sm:w-[100px] cursor-pointer"
              />
            </div>
          </div>
        </>
      )}

      {/* Screen Video Overlay */}
      {props.showVideo && (
        <div
          className="max-2xl:max-w-screen-xl max-2xl:ml-5 max-2xl:-mt-25 max-2xl:w-280
        max-xl:max-w-screen-lg max-xl:-ml-0 max-xl:w-240 max-xl:h-170 max-xl:-mt-35
        max-lg:max-w-screen-md max-lg:h-170 max-lg:ml-0 max-lg:-mt-40 max-lg:w-170
        max-md:max-w-screen-sm max-md:w-140 max-md:h-160 max-md:left-5 max-md:-bottom-140
        max-sm:-mt-10 max-sm:w-full max-sm:h-130 max-sm:left-2.5 max-sm:rounded-none
        bg-black/90 w-350 z-50 rounded-lg shadow-lg mr-auto ml-auto -mt-35"
        >
          <video
            src={myWorkplace1}
            autoPlay
            controls
            className="w-full h-[90%] object-contain rounded-lg shadow-lg"
          />
          <button
            onClick={props.onCloseVideo}
            className="absolute z-10 cursor-pointer top-0 right-25 text-white text-3xl font-bold hover:text-gray-400
            max-2xl:top-10 max-2xl:right-25
            max-xl:right-18 max-xl:-top-0
            max-lg:right-10 max-lg:-top-6
            max-sm:top-28 max-sm:right-6 max-sm:text-2xl"
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
}

export default HomeContainerCardDesc;
