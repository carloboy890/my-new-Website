import React, { useState, useRef } from "react";
import { animate } from "motion";
import HomeDesign from "./HomeDesign";
import "./AboutContainer.css";
import { useNavigate } from "react-router-dom";
import ContainerCardDesc from "./ContainerCardDesc";
import ExperienceCard from "./ExperienceCard";
import ExperienceDesc from "./ExperienceDesc";
import LineStyle from "./LineStyle";

const ContainerCard = ({
  onArrowRight,
  onArrowLeft,
  onArrowDown,
  onClick,
  ...props
}) => {
  const navigate = useNavigate();

  return (
    <HomeDesign>
      <div
        className="relative w-full h-screen text-white flex justify-center items-center font-Jost"
        onClick={onClick}
      >
        {/* sm container */}
        <div
          className="relative max-h-[900px] w-full h-[80vh] bg-black/50 max-w-screen-2xl overflow-y-scroll
        max-2xl:h-[75vh] max-2xl:max-w-screen-xl
        max-xl:max-w-screen-lg max-xl:h-[70vh]
        max-lg:max-w-screen-md 
        max-md:max-w-screen-sm max-md:h-[85vh]
        max-sm:w-full"
        >
          {/* Line Design */}
          <LineStyle />
          <div className="w-full h-[14%] pl-10 pr-10 pt-6">
            <div
              className="animate-sm-lg flex justify-between
            max-md:justify-center"
            >
              <div
                className="text-[2.5rem] font-bold mb-3 
              max-2xl:text-[1.6rem]
              max-xl:text-[1.6rem]"
              >
                {props.title}
              </div>
              <button
                onClick={() => navigate("/resume")}
                className="h-10 w-auto animate-fade-in z-50 text-white text-4xl font-bold px-3 rounded hover:bg-white/10 transition
            max-2xl:text-3xl max-2xl:top-15 max-2xl:right-185
            max-xl:right-150 
            max-md:hidden"
              >
                ×
              </button>
              <div
                className="text-[2.5rem] font-bold 
              max-2xl:text-[1.6rem]
              max-xl:text-[1.6rem]
              max-md:hidden"
              >
                {props.number}
              </div>
            </div>
            <div className="animate-sm-lg border-1 w-full mr-auto ml-auto"></div>
          </div>
          {/* Content Container */}
          <div
            className={`w-full h-6/7 flex
          max-md:flex-col max-md:hidden
          `}
          >
            {" "}
            <ExperienceDesc
              key={props.id}
              onArrowLeft={onArrowLeft}
              onArrowRight={onArrowRight}
              onArrowDown={onArrowDown}
              {...props}
            />
          </div>
          <div className=" -z-1 max-md:block max-md:z-1 ">
            {ContainerCardDesc.map((value) => (
              <ExperienceCard
                key={value.id}
                company={value.company}
                job={value.job}
                employmentType={value.employmentType}
                locationType={value.locationType}
                date={value.date}
                description={value.description}
                skillTitle={value.skillTitle}
                li1={value.li1}
                li2={value.li2}
                li3={value.li3}
                li4={value.li4}
                softwareTitle={value.softwareTitle}
                li5={value.li5}
                li6={value.li6}
                li7={value.li7}
                isId1={value.id === 1}
                isId2={value.id === 2}
                isId3={value.id === 3}
              />
            ))}
          </div>
        </div>
      </div>
    </HomeDesign>
  );
};

export default ContainerCard;
