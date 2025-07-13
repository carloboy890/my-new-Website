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
        <div className="relative mb-10 w-[85%] h-[80vh] bg-black/50 ">
          <button
            onClick={() => navigate("/resume")}
            className="absolute top-4 right-4 z-50 text-white text-3xl font-bold px-3 rounded hover:bg-white/10 transition"
          >
            ×
          </button>
          <div className="animate-pic-slide2 absolute top-8.5 left-29 h-[20%] w-[20%] 
            max-2xl:left-11 max-2xl:top-[-39px]">
            <div className="h-0.5 w-[100%] mt-10 ml-[-30px] bg-white 
            max-2xl:ml-[-80px]"></div>
            <div className="h-0.5 w-[100%] bg-white rotate-90 mt-34 ml-[-164px] 
            max-2xl:mt-20"></div>
          </div>
          <div className="animate-pic-slide2 absolute bottom-21.5 left-29 h-[20%] w-[20%] 
            max-2xl:left-11 max-2xl:bottom-11">
            <div className="h-0.5 w-[100%] mt-40 ml-[-30px] bg-white 
            max-2xl:ml-[-80px]"></div>
            <div className="h-0.5 w-[100%] rotate-90 ml-[-164px] mt-[-150px] bg-white 
            max-2xl:-mt-22"></div>
          </div>
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
            className="p-14 h-[60%] flex flex-wrap justify-center items-center max-2xl:space-x-10"
          >
            {HobbiesCardDesc.map((value) => (
              <HobbiesCard
                key={value.id}
                logo={value.logo}
                title={value.title}
              />
            ))}
          </div>
          <div className="animate-pic-slide1 absolute top-8.5 right-29 h-[20%] w-[20%] 
          max-2xl:right-11 max-2xl:top-[-39px]">
            <div className="h-0.5 w-[100%] mt-10 ml-[30px] bg-white 
            max-2xl:ml-20"></div>
            <div className="h-0.5 w-[100%] bg-white rotate-90 mt-34 ml-[164px] 
            max-2xl:mt-20"></div>
          </div>
          <div className="animate-pic-slide1 absolute bottom-21.5 right-29 h-[20%] w-[20%] 
          max-2xl:right-11 max-2xl:bottom-11">
            <div className="h-0.5 w-[100%] mt-40 ml-[30px] bg-white 
            max-2xl:ml-20"></div>
            <div className="h-0.5 w-[100%] rotate-90 ml-[164px] mt-[-150px] bg-white 
            max-2xl:mt-[-88px]"></div>
          </div>
        </div>
      </div>
    </HomeDesign>
  );
};

export default HobbiesContainer;
