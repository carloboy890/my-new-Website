import React from "react";
import WeatherHeaderSmallCards from "./WeatherHeaderSmallCards";
import BackArrowWeatherApp from "../../assets/ProjectsLogos/OtherProjectsSVG/BackArrowWeatherApp.svg";

function WeatherHeader({ metrics, onBack }) {
  console.log(metrics);

  return (
    <>
      <div
        className=" bg-black/10 backdrop-blur-sm p-7 h-40 gap-5 rounded-3xl -mt-5 flex
        max-2xl:gap-8
        max-xl:h-36
        max-lg:h-33 max-lg:gap-4
        max-md:h-29 max-md:gap-1
        max-sm:h-24 max-sm:gap-0"
      >
        {onBack && (
          <div
            onClick={onBack}
            className="ml-10 scale-100 hover:scale-120 cursor-pointer transition
            max-2xl:scale-80 max-2xl:hover:scale-90 max-2xl:mt-3 max-2xl:ml-6
            max-xl:ml-0 max-xl:scale-75 max-xl:hover:scale-85
            max-lg:scale-65 max-lg:hover:scale-75 max-lg:mt-2
            max-md:scale-55 max-md:hover:scale-65 max-md:mt-0 max-md:-ml-3
            max-sm:scale-55 max-sm:hover:scale-60 max-sm:mb-3 max-sm:w-15 max-sm:-ml-6"
          >
            <img
              src={BackArrowWeatherApp}
              alt="Back Arrow"
              className="h-25 w-25"
            />
          </div>
        )}
        <div
          className="flex justify-center w-[80%] gap-5 
        max-lg:gap-2
        max-md:gap-1
        max-sm:w-[95%] max-sm:gap-0.5"
        >
          {metrics.map((item, i) => {
            return (
              <WeatherHeaderSmallCards
                key={i}
                logo={item.logo}
                weatherData={item.label}
                weatherMetric={`${item.value} ${item.unit}`}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default WeatherHeader;
