import React from "react";
import HomeDesign from "./HomeDesign";
import hobbiesTitle from "../assets/hobbiesTitle.png";
import HobbiesCardDesc from "./HobbiesCardDesc";
import HobbiesCard from "./HobbiesCard";
import { useNavigate } from "react-router-dom";
import LineStyle from "./LineStyle";

const HobbiesContainer = ({ onClose }) => {
  const navigate = useNavigate();

  return (
    <HomeDesign>
      <div className="animate-fade-in relative text-white w-[100%] mr-auto ml-auto h-screen border-white font-Jost flex justify-center items-center">
        <div
          className="relative mb-10 w-full h-[80vh] bg-black/50 max-w-screen-2xl
        max-2xl:h-[75vh] max-2xl:max-w-screen-xl 
        max-xl:max-w-screen-lg
        max-lg:max-w-screen-md
        max-md:max-w-screen-sm
        "
        >
          <LineStyle />
          <button
            onClick={() => navigate("/resume")}
            className="absolute top-10 right-15 z-50 text-white text-3xl font-bold px-3 rounded hover:bg-white/10 transition 
            max-2xl:top-10
            max-xl:top-10 
            max-md:invisible"
          >
            ×
          </button>
          <div sm cont className="h-[30%] w-[100%]">
            <div>
              <img
                src={hobbiesTitle}
                alt="hobbiesTitle"
                className="mx-auto mt-10 w-[450px] h-[150px] animate-sm-lg
                 max-2xl:w-[350px] max-2xl:h-[120px] 
                 max-sm:w-[250px] max-sm:h-[100px] max-sm:mb-10"
              />
            </div>
          </div>
          <div
            sm
            cont2
            className="p-14 h-[60%] grid gap-6 grid-cols-3
             max-2xl:space-x-10 max-2xl:ml-25
             max-lg:space-x-1 max-lg:ml-0
             max-md:-space-x-4 max-md:w-full 
             max-sm:grid-cols-2
             max-sm:-mt-20 max-sm:p-7"
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
      </div>
    </HomeDesign>
  );
};

export default HobbiesContainer;
