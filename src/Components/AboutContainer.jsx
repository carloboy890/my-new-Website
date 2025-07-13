import React from "react";
import "./AboutContainer.css";
import pic3 from "../assets/pic3.jpg";
import UIUX from "../assets/UIUX.png";
import responsiveDes from "../assets/responsiveDes.png";
import HomeDesign from "./HomeDesign";
import { useNavigate } from "react-router-dom";

const AboutContainer = () => {
  const navigate = useNavigate();

  return (
    <HomeDesign>
      <div className="relative overflow-hidden w-[100%] h-[100vh] bg-transparent flex justify-center items-center border-white font-Jost">
        <div className="mb-10 w-[85%] h-[80vh] bg-black/50 flex items-center">
          <button
            onClick={() => navigate("/")}
            className="animate-fade-in absolute top-24 right-41 z-50 text-white text-3xl font-bold px-3 rounded hover:bg-white/10 transition 
            max-2xl:text-2xl max-2xl:top-20 max-2xl:right-36"
          >
            ×
          </button>
          <div className="animate-pic-slide2 absolute top-8.5 left-29 h-[20%] w-[20%] 
            max-2xl:left-33 max-2xl:top-3.5">
            <div className="h-0.5 w-[100%] mt-10 ml-[-30px] bg-white 
            max-2xl:ml-[-80px]"></div>
            <div className="h-0.5 w-[100%] bg-white rotate-90 mt-34 ml-[-164px] 
            max-2xl:mt-20"></div>
          </div>
          <div className="animate-pic-slide2 absolute bottom-21.5 left-29 h-[20%] w-[20%] 
          max-2xl:left-33 max-2xl:bottom-27">
            <div className="h-0.5 w-[100%] mt-40 ml-[-30px] bg-white 
            max-2xl:ml-[-80px]"></div>
            <div className="h-0.5 w-[100%] rotate-90 ml-[-164px] mt-[-150px] bg-white 
            max-2xl:-mt-22"></div>
          </div>
          <div className="animate-sm-lg w-[40%] h-[100%] flex justify-center items-center">
            <img
              className="w-[90%] h-[90%] 
              max-2xl:w-[90%] max-2xl:h-[80%]"
              src={pic3}
              alt="pic3"
            />
          </div>
          <div
            className="w-[60%] h-[100%] text-white pr-[5%] pl-[5%] "
            desc
            cont
          >
            <div className="animate-sm-lg">
              <div cont className="mt-[5%]">
                <div className="text-[3rem] font-bold 
                max-2xl:text-[2rem]">
                  ABOUT ME
                </div>
              </div>
              <div className="flex space-x-4 font-bold text-[1.3rem] mt-[3%] mb-[4%] 
              max-2xl:text-[1rem] max-2xl:mb-[3%]">
                <div age>28 years</div>
                <div>/</div>
                <div fulltime>Full-Time</div>
                <div>/</div>
                <div freelance>Freelance</div>
              </div>
              <div
                about
                me
                meaning
                className="text-[1rem] mb-10 text-justify leading-7 
                max-2xl:text-[0.85rem] max-2xl:mb-4"
              >
                Hi! I’m Carlo Damalerio, a junior front-end developer with love
                for creating responsive and user-friendly web applications. I
                enjoy turning complex problems into simple, intuitive designs.
                Though I did not take a computer science course, but since 2024
                I've been deeply committed to learning programming. I’ve taken
                online courses to strengthen my skills about coding and design.
                I specialize in HTML, CSS, JavaScript, and modern frameworks
                like Bootstrap, Tailwind, React. I'm always learning new
                technologies like AI and pushing myself to grow. Outside of
                coding, I love playing badminton, I do boxing, working out at
                the gym, travelling, watching movies , going to restaurants and
                most of the time playing video games in my game room
              </div>
            </div>
            <div line className="animate-sm-lg h-0.5 border-1 mb-8 
            max-2xl:mb-2"></div>
            <div className="animate-sm-lg">
              <div
                title
                className="text-[1.7rem] mb-8 font-bold 
                max-2xl:text-[1.3rem] max-2xl:mb-[-1px]"
              >
                MY SERVICE
              </div>
              <div cont className="flex justify-between">
                <div cont1 className="w-[40%] p-3 max-2xl:h-[10%]">
                  <div className="w-13 h-13 bg-transparent mb-6 
                  max-2xl:w-7 max-2xl:h-7">
                    <img src={UIUX} alt="UI/UX" />
                  </div>
                  <div title className="font-bold mb-3 
                  max-2xl:text-[0.9rem] max-2xl:mb-2">
                    UI/UX DESIGN
                  </div>
                  <div className="max-2xl:text-[0.8rem]">
                    Ensuring the website or application adapts seamlessly to
                    various screen sizes and devices.{" "}
                  </div>
                </div>
                <div className="w-[40%] p-3">
                  <div className="w-13 h-13 mb-6 
                  max-2xl:w-7 max-2xl:h-7">
                    <img src={responsiveDes} alt="Responsive Design" />
                  </div>
                  <div className="font-bold mb-3 
                  max-2xl:text-[0.9rem] max-2xl:mb-2">
                    RESPONSIVE WEB DESIGN
                  </div>
                  <div className="max-2xl:text-[0.8rem]">
                    Collaborating with designers and UX researchers to create
                    intuitive and engaging user experiences.{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="animate-pic-slide1 absolute top-8.5 right-29 h-[20%] w-[20%] 
          max-2xl:right-32 max-2xl:top-3.5">
            <div className="h-0.5 w-[100%] mt-10 ml-[30px] bg-white 
            max-2xl:ml-20"></div>
            <div className="h-0.5 w-[100%] bg-white rotate-90 mt-34 ml-[164px] 
            max-2xl:mt-20"></div>
          </div>
          <div className="animate-pic-slide1 absolute bottom-21.5 right-29 h-[20%] w-[20%] 
          max-2xl:right-32 max-2xl:bottom-27">
            <div className="h-0.5 w-[100%] mt-40 ml-[30px] bg-white 
            max-2xl:ml-20"></div>
            <div className="h-0.5 w-[100%] rotate-90 ml-[164px] mt-[-150px] bg-white 
            max-2xl:mt-[-88px]"></div>
          </div>
        </div>
      </div>
    </HomeDesign>
  );
};

export default AboutContainer;
