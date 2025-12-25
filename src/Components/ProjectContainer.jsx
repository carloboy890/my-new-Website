import React from "react";
import HomeDesign from "../Components/HomeDesign";
import LineStyle from "../Components/LineStyle";
import MyProjects from "./MyProjects";
import MyProjectDesc from "./MyProjectDesc";
import { Outlet, useNavigate, useMatch } from "react-router-dom";

function ProjectContainer() {
  const navigate = useNavigate();

  const isGame = useMatch("/project/gameProjects");
  const isOther = useMatch("/project/otherProjects");

  const showFolders = !isGame && !isOther;

  return (
    <HomeDesign>
      <div className="relative w-full h-screen text-white flex justify-center items-center font-Jost">
        <div className="relative h-[80vh] w-full bg-black/50  overflow-y-scroll
        max-w-screen-2xl min-h-[50vh] max-h-[90vh]
        max-2xl:max-w-screen-xl max-2xl:h-[70vh] max-2xl:pt-10
        max-xl:max-w-screen-lg max-xl:h-[70vh]
        max-lg:max-w-screen-md max-lg:h-[60vh]
        max-md:max-w-screen-sm max-md:h-auto max-md:pt-0
        max-sm:h-auto">
          <LineStyle />

          {/* Folder cards */}
          <div className="w-full h-full">
            {showFolders ? (
              <div className="flex max-2xl:-space-x-10
              max-md:flex-col max-md:items-center max-md:space-x-0 max-md:-space-y-10">
                {MyProjectDesc.map((value) => (
                  <MyProjects
                    key={value.id}
                    img={value.img}
                    description={value.description}
                    onClick={() => navigate(value.route)}
                  />
                ))}
              </div>
            ) : (
              <Outlet />
            )}
          </div>
        </div>
      </div>
    </HomeDesign>
  );
}

export default ProjectContainer;
