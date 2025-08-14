import React from "react";
import "./SkillsContainer.css";

const SkillCard = (props) => {
  return (
    <div
      className={`w-[350px] h-[400px] font-Jost border-white flex justify-center items-center ${props.animationClass}
      max-xl:w-[250px] max-xl:h-[230px]
      max-lg:w-[235px]`}
    >
      <div
        className="w-[300px] h-[360px] border-white border p-5 hover:shadow-buttonShadow hoverEffect
      max-2xl:w-[250px]
      max-xl:pt-1"
      >
        <div
          className="flex justify-around mt-5
        max-xl:mt-7"
        >
          <div>
            <img
              src={props.logo}
              alt={props.title}
              className="w-[60px] h-[60px]
              max-2xl:w-[50px] max-2xl:h-[50px]
              max-lg:w-[40px] max-lg:h-[40px]"
            />
          </div>
          <div>
            <img
              src={props.circleAnimation}
              alt="circleAnimation"
              className="w-[60px] h-[60px]
              max-2xl:w-[50px] max-2xl:h-[50px]
              max-lg:w-[40px] max-lg:h-[40px]"
            />
          </div>
        </div>
        <div className="text-center max-lg:mt-13">
          <div
            className="text-[1.4rem] mt-10
          max-2xl:text-[1.2rem]
          max-xl:text-[1.1rem] font-bold max-xl:mt-10"
          >
            {props.title}
          </div>
          <div
            className="text-[1rem] mt-5 text-justify 
          max-2xl:text-[0.9rem] max-2xl:mt-8
          max-lg:text-[0.8rem]"
          >
            {props.description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
