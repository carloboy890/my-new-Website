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
        <div className="border-1 relative w-full px-4 bg-black/50 flex flex-col items-center
        max-w-screen-xl h-[80vh] max-h-[900px]
        lg:px-8 lg:flex-row lg:items-stretch
        sm:px-6">
          
          <button
            onClick={() => navigate("/")}
            className="animate-fade-in absolute top-6 right-6 text-white text-3xl font-bold px-3 rounded hover:bg-white/10 transition z-50"
          >
            ×
          </button>

          <div className="hidden 2xl:block animate-pic-slide2 absolute top-10 left-10">
            <div className="h-0.5 w-32 bg-white mb-6"></div>
            <div className="h-32 w-0.5 bg-white"></div>
          </div>
          <div className="hidden 2xl:block animate-pic-slide2 absolute bottom-10 left-10">
            <div className="h-0.5 w-32 bg-white mb-6"></div>
            <div className="h-32 w-0.5 bg-white"></div>
          </div>
          <div className="hidden 2xl:block animate-pic-slide1 absolute top-10 right-10">
            <div className="h-0.5 w-32 bg-white mb-6"></div>
            <div className="h-32 w-0.5 bg-white"></div>
          </div>
          <div className="hidden 2xl:block animate-pic-slide1 absolute bottom-10 right-10">
            <div className="h-0.5 w-32 bg-white mb-6"></div>
            <div className="h-32 w-0.5 bg-white"></div>
          </div>

          <div className="animate-sm-lg max-w-[800px] lg:w-2/5 flex justify-center items-center">
            <img
              src={pic3}
              alt="About"
              className="w-[75%] max-w-[400px] h-auto object-cover"
            />
          </div>

          <div className="w-full lg:w-3/5 text-white space-y-4  p-4 sm:p-6 lg:p-8">
            <div className="animate-sm-lg">
              <h2 className="text-3xl sm:text-4xl font-bold mb-2">ABOUT ME</h2>
              <div className="flex flex-wrap gap-3 text-sm sm:text-base font-semibold mb-4">
                <span>28 years</span>
                <span>/</span>
                <span>Full-Time</span>
                <span>/</span>
                <span>Freelance</span>
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-justify">
                Hi! I’m Carlo Damalerio, a junior front-end developer with love for creating responsive and user-friendly web applications. I enjoy turning complex problems into simple, intuitive designs.
                Though I did not take a computer science course, since 2024 I've been deeply committed to learning programming. I’ve taken online courses to strengthen my skills about coding and design.
                I specialize in HTML, CSS, JavaScript, and modern frameworks like Bootstrap, Tailwind, React. I'm always learning new technologies like AI and pushing myself to grow.
                Outside of coding, I love playing badminton, boxing, working out at the gym, travelling, watching movies, going to restaurants, and most of the time playing video games in my game room.
              </p>
            </div>

            <hr className="animate-sm-lg border-t border-white/30" />

            <div className="animate-sm-lg">
              <h3 className="text-2xl font-bold mb-4">MY SERVICE</h3>
              <div className="flex flex-wrap gap-6">
                <div className="w-full sm:w-[47%] space-y-2">
                  <div className="w-12 h-12">
                    <img src={UIUX} alt="UI/UX" className="w-full h-full object-contain" />
                  </div>
                  <h4 className="font-bold text-lg">UI/UX DESIGN</h4>
                  <p className="text-sm text-white/90">
                    Ensuring the website or application adapts seamlessly to various screen sizes and devices.
                  </p>
                </div>
                <div className="w-full sm:w-[47%] space-y-2">
                  <div className="w-12 h-12">
                    <img src={responsiveDes} alt="Responsive Design" className="w-full h-full object-contain" />
                  </div>
                  <h4 className="font-bold text-lg">RESPONSIVE WEB DESIGN</h4>
                  <p className="text-sm text-white/90">
                    Collaborating with designers and UX researchers to create intuitive and engaging user experiences.
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
