import React from "react";

const SmEdu = (props) => {
  return (
    <>
      <div
        className={`animate-upper-slide text-justify h-[33.33%] p-7 
      max-lg:flex-col max-lg:space-y-10 max-lg:border-1 max-lg:h-120
      max-md:text-center max-md:h-120 max-md:pl-12 max-md:pr-12 flex space-x-10
      max-sm:h-130
      ${props.isId1 || props.isId2 ? "space-x-14.5" : ""}`}
      >
        <div className=" max-lg:w-full flex justify-center">
          <img
            src={props.logo}
            alt=""
            className={`h-[165px]
        max-2xl:h-[170px] max-2xl:w-[250px]
        max-xl:h-[100px] max-xl:w-[350px]
        max-lg:h-[100px] max-lg:w-[100px]
        max-sm:h-[120px] max-sm:w-[140px]
        ${
          props.isId3
            ? "!w-[200px] max-2xl:!w-[240px] max-2xl:!h-35 max-xl:!w-[278px] max-lg:!w-[130px]"
            : "w-[250px]"
        }
        ${
          props.isId1
            ? "w-[300px] max-2xl:w-[350px] max-2xl:!h-35 max-2xl:border-1 max-xl:w-[410px] max-lg:w-[130px]"
            : "w-[250px]"
        }
        ${
          props.isId2
            ? "w-[260px] max-2xl:w-[310px] max-2xl:!h-35 max-lg:w-[130px]"
            : "w-[250px]"
        }`}
          />
        </div>
        <div className="">
          <div
            className="font-bold text-[1.3rem] 
        max-2xl:text-[1.1rem]
        max-xl:text-[1rem]
        max-lg:text-center"
          >
            {props.title}
          </div>
          <div
            className="mt-2 text-[1.1rem] 
        max-2xl:text-[1rem]
        max-xl:text-[0.9rem]
        max-lg:text-center"
          >
            {props.level}
          </div>
          <div
            className="mt-2 text-[1rem] 
        max-2xl:text-[0.9rem]
        max-xl:mb-5 max-xl:text-[0.8rem]
        max-lg:text-center"
          >
            {props.course}
          </div>
          <div
            className="text-[0.9rem] mt-2
        max-2xl:text-[0.9rem] max-2xl:mt-3
        max-xl:text-[0.75rem]
        max-lg:text-center max-lg:text-[0.75rem]/7
        max-md:text-[0.7rem] max-md:mt-10 max-md:text-sm/7 
        max-sm:text-xs/7"
          >
            {props.description}
          </div>
        </div>
      </div>
    </>
  );
};

export default SmEdu;
