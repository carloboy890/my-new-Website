import React, { useState, useEffect } from "react";
import leftArrowG from "../assets/ProjectsLogos/leftArrowG.png";
import rightArrowG from "../assets/ProjectsLogos/rightArrowG.png";
import { motion, useAnimation } from "framer-motion";
import { createGameCards } from "../Components/GameProjectsDesc.jsx";
import { getScale } from "../GameProject/responsiveStyle.js";

export default function GameProjects() {
  const QuizControl = useAnimation();
  const SimonControl = useAnimation();
  const DailyWOControl = useAnimation();
  const gameCards = createGameCards(QuizControl, SimonControl, DailyWOControl);

  const [cardsOrder, setCardsOrder] = useState([0, 1, 2]);

  const rotatePositions = [-15, 0, 15];

  function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
      const onResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", onResize);
      return () => window.removeEventListener("resize", onResize);
    }, []);

    return width;
  }

  const width = useWindowWidth();
  const { quiz1, simon1, fitness1 } = getScale(width).scale;
  const { quiz2, simon2, fitness2 } = getScale(width).xMove;
  const { quiz3, simon3, fitness3 } = getScale(width).yMove;
  const { quiz4, simon4, fitness4 } = getScale(width).opacity;

  const leftOverrides = {
    1: {
      x: quiz2[0],
      y: quiz3[0],
      scale: quiz1[0],
      rotate: -15,
      opacity: quiz4[0],
    }, //No swipe quiz
    2: {
      x: simon2[2],
      y: simon3[2],
      scale: simon1[2],
      rotate: -15,
      opacity: simon4[2],
    }, //2nd swipe simon
    3: {
      x: fitness2[1],
      y: fitness3[1],
      scale: fitness1[1],
      rotate: -15,
      opacity: fitness4[1],
    }, //1st swipe fitness
  };

  const middleOverrides = {
    1: {
      x: quiz2[1],
      y: quiz3[1],
      scale: quiz1[1],
      rotate: 0,
      opacity: quiz4[1],
    }, // Quiz  1st swipe
    2: {
      x: simon2[0],
      y: simon3[0],
      scale: simon1[0],
      rotate: 0,
      opacity: simon4[0],
    }, // Simon    no swipe
    3: {
      x: fitness2[2],
      y: fitness3[2],
      scale: fitness1[2],
      rotate: 0,
      opacity: fitness4[2],
    }, // fitness 2nd swipe
  };

  const rightOverrides = {
    1: {
      x: quiz2[2],
      y: quiz3[2],
      scale: quiz1[2],
      rotate: 15,
      opacity: quiz4[2],
    }, //2nd swipe Quiz
    2: {
      x: simon2[1],
      y: simon3[1],
      scale: simon1[1],
      rotate: 15,
      opacity: simon4[1],
    }, //1st swipe simon
    3: {
      x: fitness2[0],
      y: fitness3[0],
      scale: fitness1[0],
      rotate: 15,
      opacity: fitness4[0],
    }, //no swipe Fitness
  };

  // console.log(`quizScale: ${quizScale}
  //   simonScale: ${simonScale}
  //   fitnessScale: ${fitnessScale}`);

  function rightSwipe() {
    setCardsOrder((prev) => [prev[2], prev[0], prev[1]]);
  }

  function leftSwipe() {
    setCardsOrder((prev) => [prev[1], prev[2], prev[0]]);
  }

  return (
    <div className="relative flex h-full w-full justify-center items-center">
      {/* Left Arrow */}
      <img
        src={leftArrowG}
        className="absolute -bottom-10 left-10 cursor-pointer scale-15 hover:scale-20 transition-all duration-200 
        max-2xl:-bottom-10 max-2xl:h-100 max-2xl:left-20
        max-xl:left-10 max-xl:h-90
        max-lg:-left-0 max-lg:-bottom-10 max-lg:h-80 
        max-sm:bottom-25 max-sm:-left-10"
        alt="Left Arrow"
        onClick={leftSwipe}
      />

      {/* Cards */}
      {cardsOrder.map((cardIndex, i) => {
        const card = gameCards[cardIndex];
        let pos = {};

        if (i === 1)
          pos = middleOverrides[card.id]; // middle
        else if (i === 0)
          pos = leftOverrides[card.id]; // left
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
            className={`absolute bottom-20 max-md:static`}
          >
            {card.component}
          </motion.div>
        );
      })}

      {/* Right Arrow */}
      <img
        src={rightArrowG}
        className="absolute -bottom-10 right-10 cursor-pointer scale-15 hover:scale-20 transition-all duration-200 
        max-2xl:-bottom-10 max-2xl:h-100 max-2xl:right-20
        max-xl:right-10 max-xl:h-90
        max-lg:-right-0 max-lg:-bottom-10 max-lg:h-80 
        max-sm:bottom-25 max-sm:-right-10"
        alt="Right Arrow"
        onClick={rightSwipe}
      />
    </div>
  );
}
