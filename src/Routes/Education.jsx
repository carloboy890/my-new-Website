import React from "react";
import SmEdu from "../Components/smEdu";
import smEduDes from "../Components/smEduDes";
import STACLogo from "../assets/STACLogo.png";
import FEULogo from "../assets/FEULogo.png";
import MyUdemyCert from "../assets/MyUdemyCert.jpg";
import HomeDesign from "../Components/HomeDesign";
import Navbar from "../Components/Navbar";
import "../Components/AboutContainer.css";
import { useNavigate } from "react-router-dom";

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
              <div
                className="animate-pic-slide2 absolute -top-10 left-1 h-[20%] w-[20%] 
            max-2xl:invisible"
              >
                <div className="h-0.5 w-[100%] mt-10 -ml-12 bg-white"></div>
                <div className="h-0.5 w-[100%] bg-white rotate-90 mt-30 ml-[-164px]"></div>
              </div>
              <div
                className="animate-pic-slide2 absolute bottom-2.5 left-1 h-[20%] w-[20%] 
            max-2xl:invisible"
              >
                <div className="h-0.5 w-[100%] mt-40 -ml-12 bg-white"></div>
                <div className="h-0.5 w-[100%] rotate-90 ml-[-164px] -mt-30 bg-white"></div>
              </div>
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
              <div className="w-full h-[86%] flex justify-center space-x-5 
              max-xl:-mt-20
              ">
                <div
                  cont
                  className="animate-sm-lg w-[20%] h-[100%] flex flex-col items-center
                  max-2xl:justify-center
                  max-xl:space-y-10
                  max-lg:space-y-20 max-xl:mt-30 
                  max-md:absolute max-md:space-y-90 top-75"
                >
                  <div cont1 className="flex h-[33.33%]">
                    <div logo className="h-[100%] w-full mt-4 ">
                      <img
                        src={STACLogo}
                        alt=""
                        className="h-[200px] w-[200px]
                        max-2xl:h-[170px] max-2xl:w-[170px]
                        max-xl:h-[140px] max-xl:w-[160px]"
                      />
                    </div>
                  </div>
                  <div cont2 className="flex h-[33.33%]">
                    <div
                      logo
                      className="border-white h-[100%] w-full mt-4"
                    >
                      <img
                        src={FEULogo}
                        alt=""
                        className="h-[200px] w-[200px]
                         max-2xl:h-[170px] max-2xl:w-[170px]
                         max-xl:h-[140px] max-xl:w-[160px]"
                      />
                    </div>
                  </div>
                  <div cont3 className="flex h-[33.33%] border-white">
                    <div
                      logo
                      className="border-white h-[100%] w-full mt-4"
                    >
                      <img
                        src={MyUdemyCert}
                        alt=""
                        className="h-[170px] w-[200px] 
                        max-2xl:h-[150px] max-2xl:w-[170px]
                        max-xl:h-[140px] max-xl:w-[160px]"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="h-[100%] w-[70%] pt-6
                max-2xl:text-base/4.5 max-2xl:space-y-4
                max-xl:mt-25 max-xl:space-y-8
                max-lg:w-[70%] max-lg:space-y-11 max-lg:mt-22
                max-md:absolute max-md:space-y-80 max-md:top-70 max-md:w-2/2"
                >
                  {smEduDes.map((value) => (
                    <SmEdu
                      key={value.id}
                      title={value.title}
                      level={value.level}
                      course={value.course}
                      description={value.description}
                      logo={value.logo}
                    />
                  ))}
                </div>
              </div>
              <div
                className="animate-pic-slide1 absolute -top-10 right-0 h-[20%] w-[20%] 
          max-2xl:invisible"
              >
                <div className="h-0.5 w-[100%] mt-10 ml-12 bg-white"></div>
                <div className="h-0.5 w-[100%] bg-white rotate-90 mt-30 ml-[164px]"></div>
              </div>
              <div
                className="animate-pic-slide1 absolute bottom-2.5 right-0 h-[20%] w-[20%] 
          max-2xl:invisible"
              >
                <div className="h-0.5 w-[100%] mt-40 ml-12 bg-white"></div>
                <div className="h-0.5 w-[100%] rotate-90 ml-[164px] -mt-30 bg-white"></div>
              </div>
            </div>
          </div>
        </HomeDesign>
      </div>
    </div>
  );
};

export default Education;
