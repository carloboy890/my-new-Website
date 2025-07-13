import React from "react";
import HomeDesign from "./HomeDesign";
import hobbiesTitle from "../assets/hobbiesTitle.png";
import HobbiesCardDesc from "./HobbiesCardDesc";
import HobbiesCard from "./HobbiesCard";
import { useNavigate } from "react-router-dom";

const HobbiesContainer = ({ onClose }) => {
  const navigate = useNavigate();

  return (
    <HomeDesign>
      <div className="animate-fade-in relative text-white w-[100%] mr-auto ml-auto h-screen border-white font-Jost flex justify-center items-center">
        <div className="relative mb-10 w-[80%] h-[80vh] bg-black/50 ">
          <button
            onClick={() => navigate("/resume")}
            className="absolute top-4 right-4 z-50 text-white text-3xl font-bold px-3 rounded hover:bg-white/10 transition"
          >
            ×
          </button>
          <div sm cont className="h-[30%] w-[100%]">
            <div cont>
              <img
                src={hobbiesTitle}
                alt="hobbiesTitle"
                className="mx-auto mt-10 w-[450px] h-[150px] animate-sm-lg max-xl:w-[350px] max-xl:h-[120px]"
              />
            </div>
          </div>
          <div
            sm
            cont2
            className="p-14 h-[60%] flex flex-wrap justify-center items-center max-xl:space-x-10"
          >
            {HobbiesCardDesc.map((value) => (
              <HobbiesCard
                key={value.id}
                logo={value.logo}
                title={value.title}
              />
            ))}
          </div>
        </div>
        <div className="animate-pic-slide2 absolute top-27.5 left-41 h-[20%] w-[20%]">
          <div className="h-0.5 w-[100%] mt-[-34px] ml-[27px] bg-white max-xl:ml-[-80px]"></div>
          <div className="h-0.5 w-[100%] bg-white rotate-90 mt-47.5 ml-[-164px] max-xl:mt-20"></div>
        </div>
        <div className="animate-pic-slide2 absolute bottom-[265px] left-41 h-[20%] w-[20%]">
          <div className="h-0.5 w-[100%] mt-[340px] ml-[27px] bg-white max-xl:ml-[-80px]"></div>
          <div className="h-0.5 w-[100%] rotate-90 ml-[-164px] mt-[-193px] bg-white max-xl:-mt-22"></div>
        </div>
        <div className="animate-pic-slide1 absolute top-27.5 right-41 h-[20%] w-[20%]">
          <div className="h-0.5 w-[100%] mt-[-34px] ml-[-27px] bg-white max-xl:ml-20"></div>
          <div className="h-0.5 w-[100%] bg-white rotate-90 mt-47.5 ml-[164px] max-xl:mt-20"></div>
        </div>
        <div className="animate-pic-slide1 absolute bottom-[265px] right-41 h-[20%] w-[20%]">
          <div className="h-0.5 w-[100%] mt-[340px] ml-[-27px] bg-white max-xl:ml-20"></div>
          <div className="h-0.5 w-[100%] rotate-90 ml-[164px] mt-[-193px] bg-white max-xl:mt-[-88px]"></div>
        </div>
      </div>
    </HomeDesign>
  );
};

export default HobbiesContainer;
