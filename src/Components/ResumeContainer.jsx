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
            flex items-center w-full h-[80vh] px-4 mx-auto mb-10 bg-black/50 border-white max-w-screen-xl sm:px-6 lg:px-8
            max-2xl:h-[86vh]
            max-xl:h-[75vh]
          "
        >
          {/* Left Column */}
          <div className="w-[40%] h-full space-y-10 border-white animate-pic-slide">
            <div
              className="
                mt-10 text-4xl font-bold text-center text-white sm:text-[4rem]
                max-2xl:mt-15 max-2xl:text-[2.8rem]
              "
            >
              RESUME
            </div>
            <div
              className="
                aspect-square w-[70%] h-[60%] ml-[15%] border-3 border-white rounded-full cursor-pointer hover:shadow-buttonShadow
                max-2xl:w-[75%] max-2xl:ml-20 max-2xl:mt-20
              "
            >
              <img
                src={prof2}
                alt="Profile"
                className="w-full h-full rounded-full"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="grid w-[60%] h-full grid-cols-2 gap-4 p-8 border-white">
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
                a4={value.id === 2 || value.id === 4 ? "mt-[32px]" : null}
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
