import "./HomeContainer.css";
import React, { useEffect } from "react";
import "./AboutContainer.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import profilePic from "../assets/NewDesignPic1.png";
import HomeContainerCardDesc from "./HomeContainerCardDesc";
import HomeContainerDesc from "./HomeContainerDesc";

const HomeContainer = (props) => {
  const location = useLocation();
  const [lineExpanded, setLineExpanded] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const handleShow = () => {
    setShowVideo(true);
  };

  const handleHide = () => {
    setShowVideo(false);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLineExpanded(true);
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    document.getElementById("homeText").classList.add("animate-pic-slide");
  }, [location]);
  return (
    <div className="relative w-full h-screen bg-transparent flex justify-center items-center font-Jost">
      <div
        className="animate-fade-in relative flex w-full min-h-[80vh] max-h-screen text-white max-w-screen-2xl
    max-2xl:max-w-screen-xl max-2xl:max-h-screen-xl
    max-xl:max-w-screen-lg max-xl:max-h-screen-lg
    max-lg:max-w-screen-md"
      >
        <div
          className="w-[10%]
      max-sm:hidden"
        ></div>
        {HomeContainerDesc.map((value) => (
          <HomeContainerCardDesc
            key={value.id}
            availability={value.availability}
            intro1={value.intro1}
            intro2={value.intro2}
            intro3={value.intro3}
            showVideo={showVideo}
            onShowVideo={handleShow}
            onCloseVideo={handleHide}
          />
        ))}
        <div className="animate-pic-slide2 relative w-[40%]">
          <div
            className="absolute bottom-15 w-[48rem] h-full 
        max-2xl:w-[42rem] max-2xl:h-[45rem]
        max-xl:w-[38rem] max-xl:h-[45rem]
        max-lg:hidden"
          >
            {!showVideo && (
              <img
                className="opacity-90 absolute left-[1px] w-[100rem] h-[60rem]"
                src={profilePic}
                alt="MyPic"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContainer;
