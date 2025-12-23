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
        <div className="relative h-[80vh] w-full bg-black/50 max-w-screen-2xl overflow-y-scroll">
          <LineStyle />

          {/* Folder cards */}
          <div className="w-full h-full">
            {showFolders ? (
              <div className="flex">
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
