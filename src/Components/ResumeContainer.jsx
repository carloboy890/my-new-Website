import "./ResumeContainer.css";
import React from "react";
import prof2 from "../assets/profilePic2.png";
import SmCard from "./smCard";
import smCardsDes from "./smCardDes";
import HomeDesign from "./HomeDesign";
import { useNavigate } from "react-router-dom";

function ResumeContainer() {
  const navigate = useNavigate();

  return (
    <HomeDesign>
      <div className="relative flex items-center justify-center w-full h-screen overflow-hidden font-Jost bg-transparent border-white bg-body">
        <div
          className="
            flex items-center max-w-screen-2xl w-full h-[80vh] px-4 mx-auto mb-10 bg-black/50 border-white sm:px-6 lg:px-8
            max-2xl:h-[75vh] max-2xl:max-w-screen-xl
            max-xl:h-[75vh] max-xl:max-w-screen-lg
            max-lg:max-w-screen-md max-lg:flex-col overflow-scroll
            max-md:max-w-screen-sm
            max-sm:w-full
          "
        >
          <div className="w-[40%] h-full space-y-10 border-white animate-pic-slide">
            <div
              className="
                mt-10 text-4xl font-bold text-center text-white text-[4rem]
                max-2xl:mt-15 max-2xl:text-[3.5rem] max-2xl:ml-10
                max-xl:text-[3rem] max-xl:ml-0
                max-lg:ml-6 max-lg:mt-10
                max-md:text-[2.5rem]
                max-sm:ml-0
              "
            >
              RESUME
            </div>
            <div
              className="
                aspect-square w-[70%] h-[60%] ml-[15%] border-3 border-white rounded-full cursor-pointer hover:shadow-buttonShadow
                max-2xl:w-75 max-2xl:h-[45%] max-2xl:ml-30 max-2xl:mt-20
                max-xl:w-60 max-xl:h-[35%] max-xl:ml-18 max-xl:mt-25
                max-lg:w-[80%] max-lg:h-[60%] max-lg:ml-10 max-lg:mt-12
                max-md:hidden
              "
            >
              <img
                src={prof2}
                alt="Profile"
                className="w-full h-full rounded-full"
              />
            </div>
          </div>
          <div
            className="grid w-3/5 h-full grid-cols-2 gap-4 p-8 border-white
          max-lg:w-[83%] max-lg:mt-2 max-lg:gap-8 
          max-md:w-3/3
          max-sm:flex max-sm:flex-col"
          >
            {smCardsDes.map((value) => (
              <SmCard
                key={value.id}
                title={value.title}
                description={value.description}
                text={value.text}
                bg={
                  value.id === 2 || value.id === 3
                    ? "bg-black/70"
                    : "bg-transparent"
                }
                sm={
                  value.id === 1 || value.id === 4 ? "max-sm:bg-black/70" : null
                }
                path={value.path}
                onClick={() => {
                  if ([1, 2, 3].includes(value.id)) {
                    navigate(value.path);
                  } else {
                    window.location.href = value.path;
                  }
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </HomeDesign>
  );
}

export default ResumeContainer;
