import React, { useState, useEffect } from "react";
import leftArrowG from "../assets/ProjectsLogos/leftArrowG.png";
import rightArrowG from "../assets/ProjectsLogos/rightArrowG.png";
import { motion, useAnimation } from "framer-motion";
import { createProjectCards } from "../Components/OtherProjectsDesc.jsx";
import { getScale1 } from "../GameProject/responsiveStyle.js";

export default function OtherProjects() {
  const FreeCommentApp = useAnimation();
  const WeatherApp = useAnimation();
  const MovieApp = useAnimation();
  const gameCards = createProjectCards(FreeCommentApp, WeatherApp, MovieApp);

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
  const { comment1, weather1, movie1 } = getScale1(width).scale;
  const { comment2, weather2, movie2 } = getScale1(width).xMove;
  const { comment3, weather3, movie3 } = getScale1(width).yMove;
  const { comment4, weather4, movie4 } = getScale1(width).opacity;

  const leftOverrides = {
    1: {
      x: comment2[0],
      y: comment3[0],
      scale: comment1[0],
      rotate: -15,
      opacity: comment4[0],
    }, //no swipe Comment
    2: {
      x: weather2[2],
      y: weather3[2],
      scale: weather1[2],
      rotate: -15,
      opacity: weather4[2],
    }, //2nd swipe Weather
    3: {
      x: movie2[1],
      y: movie3[1],
      scale: movie1[1],
      rotate: -15,
      opacity: movie4[1],
    }, //1st swipe Movie
  };

  const middleOverrides = {
    1: {
      x: comment2[1],
      y: comment3[1],
      scale: comment1[1],
      rotate: 0,
      opacity: comment4[1],
    }, // Comment  1st swipe
    2: {
      x: weather2[0],
      y: weather3[0],
      scale: weather1[0],
      rotate: 0,
      opacity: weather4[0],
    }, // Weather no swipe
    3: {
      x: movie2[2],
      y: movie3[2],
      scale: movie1[2],
      rotate: 0,
      opacity: movie4[2],
    }, // Movie 2nd swipe
  };

  const rightOverrides = {
    1: {
      x: comment2[2],
      y: comment3[2],
      scale: comment1[2],
      rotate: 15,
      opacity: comment4[2],
    }, //2nd swipe Comment
    2: {
      x: weather2[1],
      y: weather3[1],
      scale: weather1[1],
      rotate: 15,
      opacity: weather4[1],
    }, //1st swipe Weather
    3: {
      x: movie2[0],
      y: movie3[0],
      scale: movie1[0],
      rotate: 15,
      opacity: movie4[0],
    }, //no swipe Movie
  };

  function rightSwipe() {
    setCardsOrder((prev) => [prev[2], prev[0], prev[1]]);
  }

  function leftSwipe() {
    setCardsOrder((prev) => [prev[1], prev[2], prev[0]]);
  }

  return (
    <div className="relative flex h-full w-full justify-center items-center ">
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
        let pos = {}; // base position

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
