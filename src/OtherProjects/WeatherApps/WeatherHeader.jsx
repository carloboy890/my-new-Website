import React from "react";
import WeatherHeaderSmallCards from "./WeatherHeaderSmallCards";

function WeatherHeader({ metrics }) {
  return (
    <>
      <div
        className="border-2 bg-amber-50/90 border-white p-7 h-40 gap-5 rounded-3xl -mt-5 flex justify-center
      max-lg:h-32
      max-md:gap-2
      max-sm:p-3 max-sm:pt-7 max-sm:h-25 max-sm:gap-1"
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
    </>
  );
}

export default WeatherHeader;
