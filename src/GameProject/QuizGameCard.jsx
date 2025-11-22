import React from "react";
import quizLogo from "../assets/ProjectsLogos/quizLogo.png";
import quizTimeSVG from "../assets/ProjectsLogos/quizTimeSVG.svg";
import { motion, useAnimation } from "framer-motion";
import { useNavigate } from "react-router-dom";

function QuizGameCard(props) {
  const navigate = useNavigate();
  return (
    <>
      <motion.div
        initial={props.initial}
        animate={props.quizControl}
        className={`relative w-110 quiz-card `}
        onClick={() => navigate("/quiz")}
      >
        <div className="absolute cursor-pointer flex flex-col bottom-25 right-80 card2 transform scale-120 hover:scale-130 transition-all duration-500 justify-center items-center">
          <div>
            <img src={quizTimeSVG} alt="quiz time" className="h-8" />
          </div>
          <div>
            <img src={quizLogo} alt="quiz logo" className="h-32" />
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default QuizGameCard;
