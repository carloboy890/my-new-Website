import React from "react";
import "./SkillsContainer.css";

const SkillCard = (props) => {
  return (
    <div
      className={`w-[350px] h-[400px] font-Jost border-white flex justify-center items-center skill-card ${props.animationClass}`}
    >
      <div className="w-[300px] h-[360px] border-white border p-5 hover:shadow-buttonShadow hoverEffect">
        <div className="flex justify-around mt-8">
          <div>
            <img
              src={props.logo}
              alt={props.title}
              className="w-[70px] h-[70px]"
            />
          </div>
          <div>
            <img
              src={props.circleAnimation}
              alt="circleAnimation"
              className="w-[70px] h-[70px]"
            />
          </div>
        </div>
        <div>
          <div className="text-[1.4rem] ml-12 mt-5">{props.title}</div>
          <div className="text-[1rem] mt-5 text-justify">
            {props.description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
