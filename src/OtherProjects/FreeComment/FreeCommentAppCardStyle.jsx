import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import FreeCommentLogo from "../../assets/ProjectsLogos/OtherProjectsSVG/FreeComment.svg";

function FreeCommentAppCardStyle(props) {
  const navigate = useNavigate();
  return (
    <>
      <motion.div
        initial={props.initial}
        animate={props.freeCommentControl}
        className={`relative w-110 quiz-card `}
        onClick={() => navigate("/freeCommentApp")}
      >
        <div className="absolute cursor-pointer flex flex-col bottom-25 right-80 card2 transform scale-120 hover:scale-130 transition-all duration-500 justify-center items-center">
          <div>
            <img src={FreeCommentLogo} alt="Comment logo" className="h-32" />
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default FreeCommentAppCardStyle;
