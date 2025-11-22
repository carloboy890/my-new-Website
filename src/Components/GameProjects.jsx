import React, { useState } from "react";
import leftArrowG from "../assets/ProjectsLogos/leftArrowG.png";
import rightArrowG from "../assets/ProjectsLogos/rightArrowG.png";
import { motion, useAnimation } from "framer-motion";
import { createGameCards } from "../Components/GameProjectsDesc.jsx";

export default function GameProjects() {
  const QuizControl = useAnimation();
  const SimonControl = useAnimation();
  const DailyWOControl = useAnimation();
  const gameCards = createGameCards(QuizControl, SimonControl, DailyWOControl);
  const [isPointer, setIsPointer] = useState(false);

  const [cardsOrder, setCardsOrder] = useState([0, 1, 2]);

  const rotatePositions = [-15, 0, 15];

  const leftOverrides = {
    1: { x: -220, y: -50, scale: 0.8, rotate: -15, opacity: 0.5 }, //no swipe
    2: { x: -380, y: 100, scale: 0.45, rotate: -15, opacity: 0.5 }, //2nd swipe
    3: { x: -500, y: 0, scale: 0.8, rotate: -15, opacity: 0.5 }, //1st swipe
  };

  const middleOverrides = {
    1: { x: 350, y: 30, scale: 1.8, rotate: 0, opacity: 1 }, // Quiz  1st swipe
    2: { x: 0, y: 0, scale: 1.2, rotate: 0, opacity: 1 }, // Simon    no swipe
    3: { x: -320, y: 40, scale: 1.8, rotate: 0, opacity: 1 }, // Daily 2nd swipe
  };

  const rightOverrides = {
    1: { x: 480, y: 30, scale: 0.8, rotate: 15, opacity: 0.5 }, //2nd swipe
    2: { x: 400, y: 90, scale: 0.45, rotate: 15, opacity: 0.5 }, //1st swipe
    3: { x: 230, y: -50, scale: 0.8, rotate: 15, opacity: 0.5 }, //no swipe
  };

  function rightSwipe() {
    setCardsOrder((prev) => [prev[2], prev[0], prev[1]]);
  }

  function leftSwipe() {
    setCardsOrder((prev) => [prev[1], prev[2], prev[0]]);
  }

  return (
    <div className="relative flex h-full w-full justify-center items-center border-1">
      {/* Left Arrow */}
      <img
        src={leftArrowG}
        className="absolute -bottom-10 left-10 cursor-pointer scale-15 hover:scale-20 transition-all duration-200"
        alt="Left Arrow"
        onClick={leftSwipe}
      />

      {/* Cards */}
      {cardsOrder.map((cardIndex, i) => {
        const card = gameCards[cardIndex];
        let pos = {}; // base position

        if (i === 1) pos = middleOverrides[card.id]; // middle
        else if (i === 0) pos = leftOverrides[card.id]; // left
        else if (i === 2) pos = rightOverrides[card.id]; // right

        return (
          <motion.div
            key={card.id}
            initial={{ x: 0, y: 0 }}
            animate={{
              x: pos.x,
              y: pos.y || 0,
              scale: pos.scale,
              opacity: pos.opacity,
              rotate: pos.rotate ?? rotatePositions[i],
              zIndex: pos.zIndex,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={`absolute bottom-20`}
          >
            {card.component}
          </motion.div>
        );
      })}

      {/* Right Arrow */}
      <img
        src={rightArrowG}
        className="absolute -bottom-10 right-10 cursor-pointer scale-15 hover:scale-20 transition-all duration-200"
        alt="Right Arrow"
        onClick={rightSwipe}
      />
    </div>
  );
}
