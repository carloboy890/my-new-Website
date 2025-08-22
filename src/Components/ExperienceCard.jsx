import React from "react";

const ExperienceCard = (props) => {
  return (
    <div
      cont
      className="h-auto border-1 hidden flex-col p-10
    max-md:block max-md:mt-20 max-md:w-[90%] max-md:px-6 max-md:ml-5"
    >
      <div
        className="max-md:text-center
    max-md:text-[1.3rem] max-md:font-bold"
      >
        {props.company}
      </div>
      <div
        className={`flex justify-center max-md:mt-[2%] max-md:mb-[2%] max-md:text-[0.9rem]
            max-sm:text-[0.65rem]
    ${props.isId3 ? "mmax-md:space-x-3" : null}`}
      >
        <div>{props.job}</div>
        <span className={`${props.isId2 ? "max-md:hidden" : null}`}>/</span>
        <div>{props.employmentType}</div>
        <span className={`${props.isId2 ? "max-md:hidden" : null}`}>/</span>
        <div>{props.locationType}</div>
      </div>
      <div
        className="max-md:text-center max-md:text-[0.85rem] max-md:mb-[3%] 
      max-sm:text-[0.65rem]"
      >
        {props.date}
      </div>
      <div
        className="max-md:text-[0.8rem] max-md:mb-10 max-md:text-sm/6 max-md:text-justify 
      max-sm:text-xs/6"
      >
        {props.description}
      </div>
      <div line className="h-0.5 border-1 mb-10 max-xl:mb-6"></div>
      <div
        div
        className="max-md:text-[1.3rem] max-md:mb-6
      max-sm:text-center"
      >
        {props.skillTitle}
      </div>
      <div className="flex max-md:text-[0.65rem] justify-between">
        <ul
          className={`list-disc max-md:ml-5 max-md:space-y-4 
            max-sm:text-[0.55rem]`}
        >
          <li>{props.li1}</li>
          <li>{props.li2}</li>
        </ul>
        <ul
          className={`list-disc max-md:space-y-4 max-md:mr-15 
            max-sm:mr-0 
            max-sm:text-[0.55rem]`}
        >
          <li>{props.li5}</li>
          <li>{props.li6}</li>
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
