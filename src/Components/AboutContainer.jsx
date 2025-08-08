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
        <div
          className="mb-10 w-[85%] h-[80vh] bg-black/50 flex items-center
        max-2xl:h-[75vh]
        max-xl:h-[73vh]"
        >
          <button
            onClick={() => navigate("/")}
            className="animate-fade-in absolute top-24 right-41 z-50 text-white text-3xl font-bold px-3 rounded hover:bg-white/10 transition 
            max-2xl:text-2xl max-2xl:top-28 max-2xl:right-36
            max-xl:top-33"
          >
            ×
          </button>
          <div
            className="animate-pic-slide2 absolute top-8.5 left-29 h-[20%] w-[20%] 
            max-2xl:invisible"
          >
            <div className="h-0.5 w-[100%] mt-10 ml-[-30px] bg-white"></div>
            <div className="h-0.5 w-[100%] bg-white rotate-90 mt-34 ml-[-164px]"></div>
          </div>
          <div
            className="animate-pic-slide2 absolute bottom-21.5 left-29 h-[20%] w-[20%] 
            max-2xl:invisible"
          >
            <div className="h-0.5 w-[100%] mt-40 ml-[-30px] bg-white"></div>
            <div className="h-0.5 w-[100%] rotate-90 ml-[-164px] mt-[-150px] bg-white"></div>
          </div>
          <div className="animate-sm-lg w-[40%] h-[100%] flex justify-center items-center">
            <img
              className="w-[75%] h-[75%] 
              max-2xl:w-[75%] max-2xl:h-[70%]
              max-xl:w-[80%] max-xl:h-[70%]"
              src={pic3}
              alt="pic3"
            />
          </div>
          <div
            className="w-[60%] h-[100%] text-white p-16 ml-[-30px]
            max-2xl:pt-20
            max-xl:pl-[3%] max-xl:pt-22"
            desc
            cont
          >
            <div className="animate-sm-lg">
              <div cont className="">
                <div
                  className="text-[2.5rem] font-bold 
                max-2xl:text-[2rem]
                max-xl:text-[1.7rem] max-xl:mb-[1px]"
                >
                  ABOUT ME
                </div>
              </div>
              <div
                className="flex space-x-4 font-bold text-[1.3rem] mt-[1.2%] mb-[3%] 
              max-2xl:text-[1rem] max-2xl:mb-[3%]
              max-xl:text-[0.95rem] max-xl:mb-[2%]"
              >
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
                className="text-[1rem] mb-8 text-justify leading-7 
                max-2xl:text-[0.85rem] max-2xl:mb-4
                max-xl:text-[0.77rem]"
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
            <div
              line
              className="animate-sm-lg h-0.5 border-1 mb-6 
            max-2xl:mb-5
            max-xl:mb-5"
            ></div>
            <div className="animate-sm-lg">
              <div
                title
                className="text-[1.7rem] mb-3 font-bold 
                max-2xl:text-[1.3rem] max-2xl:mb-[2px]
                max-xl:text-[1.1rem] max-xl:mb-[2px]"
              >
                MY SERVICE
              </div>
              <div
                cont
                className="flex justify-between ml-[-2px]
              max-2xl:ml-[-5px]
              max-xl:ml-[-12px]"
              >
                <div cont1 className="w-[40%] p-3 max-2xl:h-[10%]">
                  <div
                    className="w-13 h-13 bg-transparent mb-6 
                  max-2xl:w-7 max-2xl:h-7 max-2xl:mb-5
                  max-xl:mb-4"
                  >
                    <img src={UIUX} alt="UI/UX" />
                  </div>
                  <div
                    title
                    className="font-bold mb-3 
                  max-2xl:text-[0.9rem] max-2xl:mb-2"
                  >
                    UI/UX DESIGN
                  </div>
                  <div
                    className="max-2xl:text-[0.8rem]
                    max-xl:text-[0.7rem]
                  "
                  >
                    Ensuring the website or application adapts seamlessly to
                    various screen sizes and devices.{" "}
                  </div>
                </div>
                <div className="w-[40%] p-3">
                  <div
                    className="w-13 h-13 mb-6 
                  max-2xl:w-7 max-2xl:h-7 max-2xl:mb-5
                  max-xl:mb-4"
                  >
                    <img src={responsiveDes} alt="Responsive Design" />
                  </div>
                  <div
                    className="font-bold mb-3 
                  max-2xl:text-[0.9rem] max-2xl:mb-2"
                  >
                    RESPONSIVE WEB DESIGN
                  </div>
                  <div
                    className="max-2xl:text-[0.8rem]
                  max-xl:text-[0.7rem]"
                  >
                    Collaborating with designers and UX researchers to create
                    intuitive and engaging user experiences.{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="animate-pic-slide1 absolute top-8.5 right-29 h-[20%] w-[20%] 
          max-2xl:invisible"
          >
            <div className="h-0.5 w-[100%] mt-10 ml-[30px] bg-white"></div>
            <div className="h-0.5 w-[100%] bg-white rotate-90 mt-34 ml-[164px]"></div>
          </div>
          <div
            className="animate-pic-slide1 absolute bottom-21.5 right-29 h-[20%] w-[20%] 
          max-2xl:invisible"
          >
            <div className="h-0.5 w-[100%] mt-40 ml-[30px] bg-white"></div>
            <div className="h-0.5 w-[100%] rotate-90 ml-[164px] mt-[-150px] bg-white"></div>
          </div>
        </div>
      </div>
    </HomeDesign>
  );
};

export default AboutContainer;
