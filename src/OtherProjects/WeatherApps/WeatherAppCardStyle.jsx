import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import WeatherAppLogo from "../../assets/ProjectsLogos/OtherProjectsSVG/WeatherApp.svg";

function WeatherAppCardStyle(props) {
  const navigate = useNavigate();
  return (
    <>
      <motion.div
        className="flex items-center relative h-full"
        initial={props.initial}
        animate={props.weatherAppControl}
      >
        <div
          className=" h-120 w-90 cursor-pointer scale-85 hover:scale-100 transition-all duration-1000"
          onClick={() => navigate("/weatherApp")}
        >
          <div className="absolute z-4 font-Tiny5 text-6xl top-5 text-center ">
            <img src={WeatherAppLogo} alt="Weather App" />
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default WeatherAppCardStyle;
