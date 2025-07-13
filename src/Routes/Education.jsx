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
          <div className="relative w-[100%] h-[100vh] text-white bg-trans flex justify-center items-center font-Jost">
            <div className="animate-fade-in mb-10 w-[85%] h-[80vh] bg-black/50">
              <button
                onClick={() => navigate("/resume")}
                className="absolute top-24 right-41 z-50 text-white text-3xl font-bold px-3 rounded hover:bg-white/10 transition"
              >
                ×
              </button>
              <div className="animate-pic-slide2 absolute top-8.5 left-29 h-[20%] w-[20%] max-xl:left-33">
                <div className="h-0.5 w-[100%] mt-10 ml-[-30px] bg-white max-xl:ml-[-80px]"></div>
                <div className="h-0.5 w-[100%] bg-white rotate-90 mt-34 ml-[-164px] max-xl:mt-20"></div>
              </div>
              <div className="animate-pic-slide2 absolute bottom-21.5 left-29 h-[20%] w-[20%] max-xl:left-33">
                <div className="h-0.5 w-[100%] mt-40 ml-[-30px] bg-white max-xl:ml-[-80px]"></div>
                <div className="h-0.5 w-[100%] rotate-90 ml-[-164px] mt-[-150px] bg-white max-xl:-mt-22"></div>
              </div>
              <div className="animate-sm-lg w-100% h-[14%] pl-10 pr-10 pt-6">
                <div className=" max-xl:text-[2rem] text-[2.5rem] font-bold mb-3">
                  EDUCATION
                </div>
                <div className=" w-[100%] mr-auto ml-auto border-1 border-white"></div>
              </div>
              <div className="w-[100%] h-[86%] flex">
                <div
                  cont
                  className="max-xl:w-[40%] animate-sm-lg w-[30%] h-[100%]"
                >
                  <div cont1 className="flex h-[33.33%]">
                    <div logo className="h-[100%] w-[60%] mt-4 ml-40">
                      <img
                        src={STACLogo}
                        alt=""
                        className="h-[200px] w-[280px] max-xl:h-[180px] max-xl:w-[180px]
                        "
                      />
                    </div>
                    <div line className="ml-[10%] w-[20px] h-[100%]">
                      <div className="w-[20px] h-[20px] ml-[-2px] mt-1 bg-white rounded-full"></div>
                      <div className="border-r2 w-[20%] bg-white ml-1.5 h-[92.5%]"></div>
                    </div>
                  </div>
                  <div cont2 className="flex h-[33.33%]">
                    <div
                      logo
                      className="border-white h-[100%] w-[60%] mt-4 ml-40"
                    >
                      <img
                        src={FEULogo}
                        alt=""
                        className="h-[200px] w-[250px] max-xl:h-[180px] max-xl:w-[180px]"
                      />
                    </div>
                    <div line className="ml-10%] w-[20px] h-[100%]">
                      <div className="w-[20px] h-[20px] ml-[-2px] mt-1 bg-white rounded-full"></div>
                      <div className="border-r2 w-[20%] bg-white ml-1.5 h-[92.5%] border-white"></div>
                    </div>
                  </div>
                  <div cont3 className="flex h-[33.33%] border-white">
                    <div
                      logo
                      className="border-white h-[100%] w-[60%] mt-4 ml-40"
                    >
                      <img
                        src={MyUdemyCert}
                        alt=""
                        className="h-[180px] w-[250px] max-xl:h-[180px] max-xl:w-[180px]"
                      />
                    </div>
                    <div line className="ml-[10%] w-[20px] h-[100%]">
                      <div className="w-[20px] h-[20px] ml-[-2px] mt-1 bg-white rounded-full"></div>
                      <div className="border-r2 w-[20%] bg-white ml-1.5 h-[82%] max-xl:h-[75%] border-white"></div>
                    </div>
                  </div>
                </div>
                <div className="h-[100%] w-[70%]">
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
              <div className="animate-pic-slide absolute top-8.5 right-29 h-[20%] w-[20%] max-xl:right-33">
                <div className=" h-0.5 w-[100%] mt-10 ml-[30px] bg-white max-xl:ml-20"></div>
                <div className="h-0.5 w-[100%] bg-white rotate-90 mt-34 ml-[164px] max-xl:mt-20"></div>
              </div>
              <div className="animate-pic-slide absolute bottom-21.5 right-29 h-[20%] w-[20%] max-xl:right-33">
                <div className="h-0.5 w-[100%] mt-40 ml-[30px] bg-white max-xl:ml-20"></div>
                <div className="h-0.5 w-[100%] rotate-90 ml-[164px] mt-[-150px] bg-white max-xl:mt-[-88px]"></div>
              </div>
            </div>
          </div>
        </HomeDesign>
      </div>
    </div>
  );
};

export default Education;
