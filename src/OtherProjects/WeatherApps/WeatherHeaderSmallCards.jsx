import React from "react";

function WeatherHeaderSmallCards(props) {
  return (
    <>
      <div
        className="h-30 w-40 rounded-2xl p-2 bg-white opacity-95 text-black 
      max-lg:h-20 max-lg:p-1
      max-md:p-1
      max-sm:h-14 max-sm:w-full"
      >
        <img
          className="h-8 
        max-lg:h-6
        max-md:h-5
        max-sm:h-4"
          src={props.logo}
          alt=""
        />
        <div className="flex flex-col space-y-1 items-center font-Jost font-semibold">
          <div
            className="text-xl 
          max-lg:text-[1rem]
          max-md:text-[0.85rem]
          max-sm:text-[0.45rem]"
          >
            {props.weatherData}
          </div>
          <div
            className="max-lg:text-[0.7rem]
          max-sm:text-[0.4rem]"
          >
            {props.weatherMetric}
          </div>
        </div>
      </div>
    </>
  );
}

export default WeatherHeaderSmallCards;
