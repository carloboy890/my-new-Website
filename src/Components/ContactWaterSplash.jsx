import React from "react";
import waterSplash from "../assets/waterSplash.gif";
import clickHereLogo from "../assets/clickHereLogo.png";

function ContactWaterSplash(props) {
  return (
    <>
      <div
        animation
        className="mt-10 
                  max-md:hidden"
      >
        {props.onWaterAnimate && (
          <img
            src={waterSplash}
            alt="WaterSplash"
            className="h-[150px] w-[70%]
            max-xl:w-[90%]
            max-lg:w-980%] max-lg:mt-0"
          />
        )}
      </div>
      <div
        onClick={props.onHandleClick}
        className="left-30 top-130 hover:scale-105 transition duration-300 ease-in-out animate-pulse mt-10 cursor-pointer z-50 absolute h-[180px] w-[180px]
                  max-2xl:-ml-0 max-2xl:top-130
                  max-xl:-ml-5 
                  max-md:top-0 max-md:-left-35
                  max-sm:-left-20 max-sm:top-0"
        style={{ visibility: props.hideClick ? "hidden" : "visible" }}
      >
        <img
          src={clickHereLogo}
          alt="clickHere"
          className="h-full w-full pointer-events-auto 
                      max-2xl:h-[130px] max-2xl:w-[130px] 
                      max-sm:h-[80px] max-sm:w-[80px]"
        />
      </div>
    </>
  );
}

export default ContactWaterSplash;
