import React from "react";
import SmEdu from "../Components/smEdu";
import smEduDes from "../Components/smEduDes";
import HomeDesign from "../Components/HomeDesign";
import Navbar from "../Components/Navbar";
import "../Components/AboutContainer.css";
import { useNavigate } from "react-router-dom";
import LineStyle from "../Components/LineStyle";

const Education = (props) => {
  const navigate = useNavigate();
  return (
    <div className="relative w-full min-h-screen overflow-hidden text-white font-Jost">
      <div className="absolute inset-0 bg-[url('../assets/rockBackground.png')] bg-cover bg-center opacity-20 z-0"></div>

      <div className="relative z-10 h-screen flex flex-col overflow-hidden">
        <div className="h-16 shrink-0">
          <Navbar />
        </div>
        <HomeDesign>
          <div className="w-full h-[100vh] text-white bg-trans flex justify-center items-center font-Jost">
            <div
              className="relative animate-fade-in mb-10 w-full h-[80vh] bg-black/50 max-w-screen-2xl
            max-2xl:h-[85vh] max-2xl:max-w-screen-xl
            max-xl:max-w-screen-lg max-xl:h-[75vh] max-xl:overflow-y-scroll
            max-lg:max-w-screen-md 
            max-md:max-w-screen-sm"
            >
              {/*Line Style */}
              <LineStyle />
              <button
                onClick={() => navigate("/resume")}
                className="absolute top-7 right-15 z-50 text-white text-3xl font-bold px-3 rounded hover:bg-white/10 transition 
                max-2xl:top-6
                max-xl:top-6
                max-lg:top-6
                max-md:hidden"
              >
                ×
              </button>
              <div
                className="animate-sm-lg w-100% h-[14%] pl-10 pr-10 pt-6 
              max-2xl:pt-5"
              >
                <div
                  className="text-[2.5rem] font-bold mb-3 
                max-2xl:text-[2rem] max-2xl:mb-2
                max-xl:text-[1.9rem] max-md:text-center"
                >
                  EDUCATION
                </div>
                <div className="w-full mr-auto ml-auto border-1 border-white"></div>
              </div>
              <div
                className="w-full h-[86%] flex justify-center space-x-5 
              max-xl:-mt-20
              "
              >
                <div
                  className="h-[100%] w-[95%] p-6
                max-2xl:text-base/4.5 max-2xl:space-y-4
                max-xl:mt-15 max-xl:space-y-8
                max-lg:w-[95%] max-lg:space-y-20 max-lg:mt-22
                max-md:absolute max-md:space-y-20 max-md:w-2/2
                max-sm:space-y-30"
                >
                  {smEduDes.map((value) => (
                    <SmEdu
                      key={value.id}
                      title={value.title}
                      level={value.level}
                      course={value.course}
                      description={value.description}
                      logo={value.logo}
                      isId1={value.id === 1}
                      isId2={value.id === 2}
                      isId3={value.id === 3}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </HomeDesign>
      </div>
    </div>
  );
};

export default Education;
