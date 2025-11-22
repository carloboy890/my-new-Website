import React from "react";
import { useNavigate } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";

function SimonGameCard(props) {
  const navigate = useNavigate();
  const colors = ["bg-red-500", "bg-blue-500", "bg-yellow-500", "bg-green-500"];

  return (
    <>
      <motion.div
        className="flex items-center relative h-full"
        initial={props.initial}
        animate={props.simonControl}
      >
        <div
          className="card1 h-120 w-90 cursor-pointer scale-85 hover:scale-100 transition-all duration-1000"
          onClick={() => navigate("/simon")}
        >
          <div className="absolute z-4 font-Tiny5 text-6xl top-5 text-center ">
            <div className="text-[#8F4da6]">{props.title1}</div>
            <div className="text-[#498fa2]">{props.title2}</div>
          </div>
          <div className="b"></div>
          <div className="content flex justify-center items-center flex-wrap gap-2 absolute z-3  h-50 w-50 top-50">
            {colors.map((value, i) => (
              <div key={i} className={`rounded-xl h-20 w-20 ${value}`}></div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default SimonGameCard;
