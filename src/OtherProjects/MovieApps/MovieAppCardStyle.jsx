import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import MovieAppLogo from "../../assets/ProjectsLogos/OtherProjectsSVG/MovieApp.svg";

function MovieAppCardStyle(props) {
  const navigate = useNavigate();
  return (
    <>
      <motion.div
        initial={props.initial}
        style={props.style}
        animate={props.movieAppControl}
        className="relative w-110"
      >
        <div
          onClick={() => navigate("/movieApp")}
          class="cursor-pointer group bottom-25 scale-130 hover:scale-140 transition-all duration-500 left-80   absolute w-40 h-40 shadow-inner shadow-gray-50 flex justify-center items-center rounded-3xl"
        >
          <img src={MovieAppLogo} alt="Movie App" className="h-30" />
        </div>
      </motion.div>
    </>
  );
}

export default MovieAppCardStyle;
