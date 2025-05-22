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
            className="absolute top-24 right-41 z-50 text-white text-3xl font-bold px-3 rounded hover:bg-white/10 transition"
          >
            ×
          </button>
          <div className="animate-pic-slide2 absolute top-8.5 left-29 h-[20%] w-[20%]">
            <div className="h-0.5 w-[100%] mt-10 ml-[-30px] bg-white"></div>
            <div className="h-0.5 w-[100%] bg-white rotate-90 mt-34 ml-[-164px]"></div>
          </div>
          <div className="animate-pic-slide2 absolute bottom-21.5 left-29 h-[20%] w-[20%]">
            <div className="h-0.5 w-[100%] mt-40 ml-[-30px] bg-white"></div>
            <div className="h-0.5 w-[100%] rotate-90 ml-[-164px] mt-[-150px] bg-white"></div>
          </div>
          <div className="animate-sm-lg w-[40%] h-[100%] flex justify-center items-center">
            <img className="w-[90%] h-[90%]" src={pic3} alt="" />
            {/* <div>fb</div>
          <div>X</div>
          <div>Instagram</div> */}
          </div>
          <div
            className="w-[60%] h-[100%] text-white pr-[5%] pl-[5%] "
            desc
            cont
          >
            <div className="animate-sm-lg">
              <div cont className="mt-[5%]">
                <div className="text-[3rem] font-bold">ABOUT ME</div>
              </div>
              <div className="flex space-x-4 font-bold text-[1.3rem] mt-[3%] mb-[4%]">
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
                className="text-[1rem] mb-10 text-justify leading-7"
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
            <div line className="animate-sm-lg h-0.5 border-1 mb-8"></div>
            <div className="animate-sm-lg">
              <div title className="text-[1.7rem] mb-8 font-bold">
                MY SERVICE
              </div>
              <div cont className="flex justify-between">
                <div cont1 className="w-[40%] hoverEffect p-3">
                  <div className="w-13 h-13 bg-transparent mb-6">
                    <img src={UIUX} alt="UI/UX" />
                  </div>
                  <div title className="font-bold mb-3">
                    UI/UX DESIGN
                  </div>
                  <div>
                    Ensuring the website or application adapts seamlessly to
                    various screen sizes and devices.{" "}
                  </div>
                </div>
                <div className="w-[40%] hoverEffect p-3">
                  <div className="w-13 h-13 mb-6">
                    <img src={responsiveDes} alt="Responsive Design" />
                  </div>
                  <div className="font-bold mb-3">RESPONSIVE WEB DESIGN</div>
                  <div>
                    Collaborating with designers and UX researchers to create
                    intuitive and engaging user experiences.{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="animate-pic-slide1 absolute top-8.5 right-29 h-[20%] w-[20%]">
            <div className="h-0.5 w-[100%] mt-10 ml-[30px] bg-white"></div>
            <div className="h-0.5 w-[100%] bg-white rotate-90 mt-34 ml-[164px]"></div>
          </div>
          <div className="animate-pic-slide1 absolute bottom-21.5 right-29 h-[20%] w-[20%]">
            <div className="h-0.5 w-[100%] mt-40 ml-[30px] bg-white"></div>
            <div className="h-0.5 w-[100%] rotate-90 ml-[164px] mt-[-150px] bg-white"></div>
          </div>
        </div>
      </div>
    </HomeDesign>
  );
};

export default AboutContainer;
