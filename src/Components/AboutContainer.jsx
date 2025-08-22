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
      <div className="relative w-full h-screen bg-transparent flex justify-center items-center font-Jost">
        {/* main container */}
        <div
          className="relative w-full px-4 py-25 bg-black/50 flex flex-row items-center
        max-w-screen-2xl h-[80vh] max-h-[900px]
        max-2xl:max-w-screen-xl max-2xl:h-[80vh] max-2xl:overflow-y-scroll
        max-xl:max-w-screen-lg max-xl:h-[75vh] max-xl:py-5 max-xl:px-10
        max-lg:max-w-screen-md max-lg:px-8 max-lg:py-10 max-lg:flex-col lg:items-stretch max-lg:overflow-y-scroll
        max-md:px-6 max-md:max-w-screen-sm
        max-sm:max-w-full"
        >
          <button
            onClick={() => navigate("/")}
            className="animate-fade-in absolute top-6 right-6 text-white text-3xl font-bold px-3 rounded hover:bg-white/10 transition z-50 
            max-md:invisible"
          >
            ×
          </button>
          {/* line container */}
          <div className="hidden 2xl:block animate-pic-slide2 absolute top-0 left-0">
            <div className="h-0.5 w-32 bg-white"></div>
            <div className="h-32 w-0.5 bg-white"></div>
          </div>
          <div className="hidden 2xl:block animate-pic-slide2 absolute bottom-0 left-0">
            <div className="h-0.5 w-32 bg-white"></div>
            <div className="h-32 w-0.5 bg-white absolute bottom-0"></div>
          </div>
          <div className="hidden 2xl:block animate-pic-slide1 absolute top-0 right-0">
            <div className="h-0.5 w-32 bg-white"></div>
            <div className="h-32 w-0.5 bg-white absolute right-0"></div>
          </div>
          <div className="hidden 2xl:block animate-pic-slide2 absolute bottom-0 right-0 rotate-180">
            <div className="h-0.5 w-32 bg-white"></div>
            <div className="h-32 w-0.5 bg-white"></div>
          </div>
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
          <div
            className="w-[70%] text-white mt-12 space-y-8 p-4 sm:p-6 
          max-2xl:mt-5
          max-xl:mt-0 
          max-lg:p-8 max-lg:w-3/3 max-lg:mt-15
          max-md:-mt-60"
          >
            <div className="animate-sm-lg">
              <h2
                className="text-3xl sm:text-4xl font-bold mb-2
              max-md:text-center max-md:mb-5"
              >
                ABOUT ME
              </h2>
              <div
                className="flex flex-wrap gap-3 text-sm sm:text-base font-semibold mb-4 
              max-md:flex max-md:justify-center"
              >
                <span>28 years</span>
                <span>/</span>
                <span>Full-Time</span>
                <span>/</span>
                <span>Freelance</span>
              </div>
              <p
                className="leading-relaxed text-justify text-[1rem]
              max-2xl:text-[1rem] max-2xl:text-base/7
              max-xl:text-[0.85rem] max-xl:text-base/8 max-xl:-mb-2 
              max-md:mt-10 max-md:text-center 
              max-sm:text-xs/7"
              >
                Hi! I’m Carlo Damalerio, a junior front-end developer with love
                for creating responsive and user-friendly web applications. I
                enjoy turning complex problems into simple, intuitive designs.
                Though I did not take a computer science course, since 2024 I've
                been deeply committed to learning programming. I’ve taken online
                courses to strengthen my skills about coding and design. I
                specialize in HTML, CSS, JavaScript, and modern frameworks like
                Bootstrap, Tailwind, React. I'm always learning new technologies
                like AI and pushing myself to grow. Outside of coding, I love
                playing badminton, boxing, working out at the gym, travelling,
                watching movies, going to restaurants, and most of the time
                playing video games in my game room.
              </p>
            </div>

            <hr
              className="animate-sm-lg border-t border-white/30 
            max-xl:mb-7"
            />

            <div className="animate-sm-lg">
              <h3
                className="text-2xl font-bold mb-4
              max-xl:text-[1.4rem] 
              max-md:text-center 
              max-sm:mb-7"
              >
                MY SERVICE
              </h3>
              <div className="flex flex-wrap gap-6">
                <div
                  className="w-full sm:w-[47%] space-y-2 
                max-sm:text-center max-sm:flex max-sm:flex-col max-sm:items-center"
                >
                  <div
                    className="w-12 h-12
                  max-xl:w-10 max-xl:h-10"
                  >
                    <img
                      src={UIUX}
                      alt="UI/UX"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h4
                    className="font-bold text-lg 
                  max-xl:text-[1rem]"
                  >
                    UI/UX DESIGN
                  </h4>
                  <p
                    className="text-sm text-white/90 
                  max-xl:text-[0.8rem]"
                  >
                    Ensuring the website or application adapts seamlessly to
                    various screen sizes and devices.
                  </p>
                </div>
                <div
                  className="w-full sm:w-[47%] space-y-2 
                max-sm:text-center max-sm:flex max-sm:flex-col max-sm:items-center"
                >
                  <div
                    className="w-12 h-12
                  max-xl:w-10 max-xl:h-10"
                  >
                    <img
                      src={responsiveDes}
                      alt="Responsive Design"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h4
                    className="font-bold text-lg 
                  max-xl:text-[1rem]"
                  >
                    RESPONSIVE WEB DESIGN
                  </h4>
                  <p
                    className="text-sm text-white/90 
                  max-xl:text-[0.8rem]"
                  >
                    Collaborating with designers and UX researchers to create
                    intuitive and engaging user experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HomeDesign>
  );
};

export default AboutContainer;
