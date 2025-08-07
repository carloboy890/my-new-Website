import React from "react";
import "./SkillsContainer.css";

const SkillCard = (props) => {
  return (
    <div
      className={`w-[350px] h-[400px] font-Jost border-white flex justify-center items-center skill-card ${props.animationClass}`}
    >
      <div
        className="w-[300px] h-[360px] border-white border p-5 hover:shadow-buttonShadow hoverEffect
      max-2xl:w-[250px] max-2xl:h-[260]"
      >
        <div className="flex justify-around mt-8">
          <div>
            <img
              src={props.logo}
              alt={props.title}
              className="w-[70px] h-[70px]
              max-2xl:w-[50px]
              max-2xl:h-[50px]"
            />
          </div>
          <div>
            <img
              src={props.circleAnimation}
              alt="circleAnimation"
              className="w-[70px] h-[70px]
              max-2xl:w-[50px]
              max-2xl:h-[50px]"
            />
          </div>
        </div>
        <div>
          <div
            className="text-[1.4rem] ml-12 mt-5
          max-2xl:text-[1.2rem]"
          >
            {props.title}
          </div>
          <div
            className="text-[1rem] mt-5 text-justify 
          max-2xl:text-[0.9rem] max-2xl:mt-8"
          >
            {props.description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
