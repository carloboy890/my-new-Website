import React from "react";

const SmEdu = (props) => {
  return (
    <>
      <div
        className="animate-upper-slide text-justify h-[33.33%] pl-8 pr-8 
      max-md:text-center max-md:pl-12 max-md:pr-12"
      >
        <div
          className="font-bold text-[1.3rem] 
        max-2xl:text-[1.1rem]"
        >
          {props.title}
        </div>
        <div
          className="mt-2 text-[1.1rem] 
        max-2xl:text-[1rem]"
        >
          {props.level}
        </div>
        <div
          className="mt-1 text-[1rem] 
        max-2xl:text-[0.9rem]
        max-xl:mb-5"
        >
          {props.course}
        </div>
        <div
          className="mt-6 text-[0.9rem] 
        max-2xl:text-[0.9rem] max-2xl:mt-3 
        max-md:text-[0.9rem] max-md:mt-10 max-md:text-sm/7 
        max-sm:text-xs/7"
        >
          {props.description}
        </div>
      </div>
    </>
  );
};

export default SmEdu;
