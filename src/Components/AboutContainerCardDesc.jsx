import React from "react";
import UIUX from "../assets/UIUX.png";
import responsiveDes from "../assets/responsiveDes.png";

function AboutContainerCardDesc(props) {
  return (
    <>
      <div
        className="w-[70%] text-white mt-12 space-y-8 p-4 sm:p-6 
              max-2xl:mt-5
              max-xl:mt-0 
              max-lg:p-8 max-lg:w-3/3 max-lg:mt-15
              max-md:-mt-60"
      >
        <div className="animate-sm-lg">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-2
                max-lg:text-center
                max-md:text-center max-md:mb-5"
          >
            {props.title}
          </h2>
          <div
            className="flex flex-wrap gap-3 text-sm sm:text-base font-semibold mb-4 
                  max-lg:justify-center
                  max-md:flex max-md:justify-center"
          >
            <span>{props.age}</span>
            <span>/</span>
            <span>{props.employmentType1}</span>
            <span>/</span>
            <span>{props.employmentType2}</span>
          </div>
          <p
            className="leading-relaxed text-justify text-[1rem]
                  max-2xl:text-[1rem] max-2xl:text-base/7
                  max-xl:text-[0.85rem] max-xl:text-base/8 max-xl:-mb-2 
                  max-lg:text-center
                  max-md:mt-10 max-md:text-center 
                  max-sm:text-xs/7"
          >
            {props.description}
          </p>
        </div>

        <hr
          className="animate-sm-lg border-t border-white/30 
                max-xl:mb-7"
        />

        <div className="animate-sm-lg">
          <h3
            className="text-2xl font-bold mb-4
                  max-xl:text-[1.4rem] 
                  max-lg:text-center
                  max-md:text-center 
                  max-sm:mb-7"
          >
            {props.service}
          </h3>
          <div className="flex flex-wrap gap-6">
            <div
              className="w-full sm:w-[47%] space-y-2 
                    max-sm:text-center max-sm:flex max-sm:flex-col max-sm:items-center"
            >
              <div
                className="w-12 h-12
                    max-lg:w-full
                    max-xl:w-10 max-xl:h-10"
              >
                <img
                  src={UIUX}
                  alt="UI/UX"
                  className="w-full h-full object-contain"
                />
              </div>
              <h4
                className="font-bold text-lg
                    max-lg:text-center  
                    max-xl:text-[1rem]"
              >
                {props.service1}
              </h4>
              <p
                className="text-sm text-white/90
                    max-lg:text-center 
                    max-xl:text-[0.8rem]"
              >
                {props.service1Desc}
              </p>
            </div>
            <div
              className="w-full sm:w-[47%] space-y-2 
                    max-sm:text-center max-sm:flex max-sm:flex-col max-sm:items-center"
            >
              <div
                className="w-12 h-12
                    max-lg:w-full 
                    max-xl:w-10 max-xl:h-10"
              >
                <img
                  src={responsiveDes}
                  alt="Responsive Design"
                  className="w-full h-full object-contain"
                />
              </div>
              <h4
                className="font-bold text-lg 
                    max-lg:text-center 
                    max-xl:text-[1rem]"
              >
                {props.service2}
              </h4>
              <p
                className="text-sm text-white/90 
                    max-lg:text-center 
                    max-xl:text-[0.8rem]"
              >
                {props.service2Desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutContainerCardDesc;
