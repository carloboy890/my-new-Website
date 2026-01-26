import React from "react";

function WeatherHeaderSmallCards(props) {
  return (
    <>
      <div
        className="h-30 w-40 rounded-2xl p-2 bg-black/20 text-white 
        max-xl:h-25 max-xl:space-y-1.5
      max-lg:h-22 max-lg:p-1
      max-md:p-1 max-md:h-19
      max-sm:h-14 max-sm:w-full max-sm:space-y-1"
      >
        <img
          className="h-8 
        max-xl:h-7
        max-lg:h-6
        max-md:h-5
        max-sm:h-4"
          src={props.logo}
          alt=""
        />
        <div className="flex flex-col space-y-1 items-center font-Jost font-semibold">
          <div
            className="text-xl 
          max-xl:text-[0.9rem]
          max-lg:text-[0.85rem]
          max-md:text-[0.65rem]
          max-sm:text-[0.35rem]"
          >
            {props.weatherData}
          </div>
          <div
            className="
          max-xl:text-[0.8rem]
          max-lg:text-[0.7rem]
          max-md:text-[0.6rem]
          max-sm:text-[0.35rem]"
          >
            {props.weatherMetric}
          </div>
        </div>
      </div>
    </>
  );
}

export default WeatherHeaderSmallCards;
