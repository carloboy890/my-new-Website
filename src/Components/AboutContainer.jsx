import React from "react";
import "./AboutContainer.css";
import pic3 from "../assets/pic3.jpg";
import HomeDesign from "./HomeDesign";
import { useNavigate } from "react-router-dom";
import LineStyle from "./LineStyle";
import AboutContainerCardDesc from "./AboutContainerCardDesc";
import AboutContainerDesc from "./AboutContainerDesc";

const AboutContainer = () => {
  const navigate = useNavigate();

  return (
    <HomeDesign>
      <div className="relative w-full h-screen bg-transparent flex justify-center items-center font-Jost">
        {/* main container */}
        <div
          className="relative w-full px-4 bg-black/50 flex flex-row items-center
        max-w-screen-2xl min-h-[80vh] max-h-[90vh]
        max-2xl:max-w-screen-xl max-2xl:h-[80vh] max-2xl:overflow-y-scroll
        max-xl:max-w-screen-lg max-xl:h-[80vh] max-xl:py-5 max-xl:px-10
        max-lg:max-w-screen-md max-lg:px-8 max-lg:py-10 max-lg:flex-col lg:items-stretch max-lg:overflow-y-scroll
        max-md:px-6 max-md:max-w-screen-sm
        max-sm:max-w-full max-sm:"
        >
          <button
            onClick={() => navigate("/")}
            className="animate-fade-in absolute top-6 right-6 text-white text-3xl font-bold px-3 rounded hover:bg-white/10 transition z-50 
            max-md:invisible"
          >
            ×
          </button>
          {/* line container */}
          <LineStyle />
          {/* Left Container Pic */}
          <div
            className="animate-sm-lg max-w-[800px] flex justify-center items-center 
          max-lg:w-2/4 
          max-md:invisible"
          >
            <img
              src={pic3}
              alt="About"
              className="w-[75%] max-w-[400px] h-auto object-cover 
              max-lg:h-[250px] max-lg:w-[60%]"
            />
          </div>
          {/* Content container */}
          {AboutContainerDesc.map((value) => (
            <AboutContainerCardDesc
              key={value.id}
              title={value.title}
              age={value.age}
              employmentType1={value.employmentType1}
              employmentType2={value.employmentType2}
              description={value.description}
              service={value.service}
              service1={value.service1}
              service1Desc={value.service1Desc}
              service2={value.service2}
              service2Desc={value.service2Desc}
            />
          ))}
        </div>
      </div>
    </HomeDesign>
  );
};

export default AboutContainer;
