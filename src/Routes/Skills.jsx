import React from "react";
import SkillsContainer from "../Components/SkillsContainer";
import Navbar from "../Components/Navbar";

const Skills = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden text-white font-Jost">
      <div className="absolute inset-0 bg-[url('../assets/rockBackground.png')] bg-cover bg-center opacity-20 z-0"></div>

      <div className="relative z-10 h-screen flex flex-col overflow-hidden">
        <div className="h-16 shrink-0">
          <Navbar />
        </div>
        <div className="flex-grow overflow-hidden">
          <SkillsContainer />
        </div>
      </div>
    </div>
  );
};

export default Skills;
