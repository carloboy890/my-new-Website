import React from "react";
import profilePic from "../assets/NewDesignPic1.png";

const HomeDesign = ({ children }) => {
  return (
    <div className="relative h-[76.5vh] flex w-[100%] 
    max-2xl:h-[90vh]">
      <div className="absolute bottom-5 right-0 w-[48rem] h-[45rem]">
        <img
          className="opacity-80 absolute w-[100rem] h-[60rem] 
          max-2xl:h-[50rem]"
          src={profilePic}
          alt="MyPic"
        />
      </div>
      <div className="relative w-full h-full z-10">{children}</div>
    </div>
  );
};

export default HomeDesign;
