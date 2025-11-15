import React from "react";
import HomeDesign from "../Components/HomeDesign";
import LineStyle from "../Components/LineStyle";
import GameProjects from "./GameProjects";

function ProjectContainer() {
  return (
    <HomeDesign>
      <div className="relative w-full h-screen text-white flex justify-center items-center font-Jost">
        {/* sm container */}
        <div
          className="relative h-[80vh] w-full bg-black/50 max-w-screen-2xl overflow-y-scroll
        max-2xl:h-[80vh] max-2xl:max-w-screen-xl
        max-xl:max-w-screen-lg max-xl:h-[80vh]
        max-lg:max-w-screen-md max-lg:h-[75vh]
        max-md:max-w-screen-sm max-md:h-[85vh]
        max-sm:w-full "
        >
          {/* Line Design */}
          <LineStyle />
          {/* Content Container */}
          <GameProjects />
        </div>
      </div>
    </HomeDesign>
  );
}
export default ProjectContainer;
