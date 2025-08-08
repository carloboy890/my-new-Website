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
        <div
          className=" mb-10 w-[85%] h-[80vh] bg-black/50
        max-2xl:h-[75vh]
        max-xl:h-[70vh]"
        >
          <button
            onClick={() => navigate("/resume")}
            className="absolute top-25 right-44 z-50 text-white text-3xl font-bold px-3 rounded hover:bg-white/10 transition 
            max-2xl:top-32
            max-xl:top-38 max-xl:right-35"
          >
            ×
          </button>
          <div
            className="animate-pic-slide2 absolute top-8.5 left-29 h-[20%] w-[20%] 
            max-2xl:invisible"
          >
            <div className="h-0.5 w-[100%] mt-10 ml-[-30px] bg-white"></div>
            <div className="h-0.5 w-[100%] bg-white rotate-90 mt-34 ml-[-164px]"></div>
          </div>
          <div
            className="animate-pic-slide2 absolute bottom-21.5 left-29 h-[20%] w-[20%] 
            max-2xl:invisible"
          >
            <div className="h-0.5 w-[100%] mt-40 ml-[-30px] bg-white"></div>
            <div className="h-0.5 w-[100%] rotate-90 ml-[-164px] mt-[-150px] bg-white"></div>
          </div>
          <div sm cont className="h-[30%] w-[100%]">
            <div cont>
              <img
                src={hobbiesTitle}
                alt="hobbiesTitle"
                className="mx-auto mt-10 w-[450px] h-[150px] animate-sm-lg
                 max-2xl:w-[350px] max-2xl:h-[120px]"
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
          <div
            className="animate-pic-slide1 absolute top-8.5 right-29 h-[20%] w-[20%] 
          max-2xl:invisible"
          >
            <div
              className="h-0.5 w-[100%] mt-10 ml-[30px] bg-white 
            max-2xl:invisible"
            ></div>
            <div
              className="h-0.5 w-[100%] bg-white rotate-90 mt-34 ml-[164px] 
            max-2xl:invisible"
            ></div>
          </div>
          <div
            className="animate-pic-slide1 absolute bottom-21.5 right-29 h-[20%] w-[20%] 
          max-2xl:invisible"
          >
            <div
              className="h-0.5 w-[100%] mt-40 ml-[30px] bg-white 
            max-2xl:invisible"
            ></div>
            <div
              className="h-0.5 w-[100%] rotate-90 ml-[164px] mt-[-150px] bg-white 
            max-2xl:invisible"
            ></div>
          </div>
        </div>
      </div>
    </HomeDesign>
  );
};

export default HobbiesContainer;
