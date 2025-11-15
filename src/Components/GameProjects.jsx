import React from "react";
import SimonGame from "../GameProject/SimonGame";
import { useNavigate } from "react-router-dom";
import leftArrowG from "../assets/ProjectsLogos/leftArrowG.png";
import rightArrowG from "../assets/ProjectsLogos/rightArrowG.png";

function GameProjects() {
  const colors = ["bg-red-500", "bg-blue-500", "bg-yellow-500", "bg-green-500"];
  const navigate = useNavigate();

  return (
    <div className="flex h-full w-full justify-center ">
      <div className="relative w-80">
        <div className="absolute bottom-20 right-0">
          <img
            src={leftArrowG}
            className="invisible md:invisible sm:invisible lg:visible cursor-pointer scale-50 hover:scale-70 transition-all duration-200 h-20 w-20"
            alt="Left Arrow Game"
          />
        </div>
      </div>
      <div className="flex items-center w-3/4 h-full justify-center ">
        <div
          className="card1 h-110 w-80 cursor-pointer scale-85 hover:scale-100 transition-all duration-1000"
          onClick={() => navigate("/simon")}
        >
          <div className="absolute z-4 font-Tiny5 text-6xl top-5">
            <div className="text-[#8F4da6]">SIMON</div>
            <div className="text-[#498fa2]">GAME</div>
          </div>
          <div className="b"></div>
          <div className="content flex justify-center items-center flex-wrap gap-2 absolute z-3  h-50 w-50 top-50">
            {colors.map((value, i) => (
              <div key={i} className={`rounded-xl h-20 w-20 ${value}`}></div>
            ))}
          </div>
        </div>
      </div>
      <div className="relative w-80">
        <div className="absolute bottom-20">
          <img
            src={rightArrowG}
            className="invisible md:invisible sm:invisible lg:visible cursor-pointer scale-50 hover:scale-70 transition-all duration-200 h-20 w-20"
            alt="Right Arrow Game"
          />
        </div>
      </div>
    </div>
  );
}

export default GameProjects;
