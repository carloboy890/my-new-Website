import React, { useState, useEffect } from "react";
import ContainerCard from "../Components/ContainerCard";
import ContainerCardDesc from "../Components/ContainerCardDesc";
import Navbar from "../Components/Navbar";

const Experience = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openExperience, setOpenExperience] = useState(false);

  const openModal = (newIndex) => {
    setCurrentIndex(newIndex);
    setOpenExperience(true);
  };

  const handleRightArrowClick = () => {
    const nextIndex =
      currentIndex < ContainerCardDesc.length - 1
        ? currentIndex + 1
        : currentIndex;
    openModal(nextIndex);
  };

  const handleLeftArrowClick = () => {
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : currentIndex;
    openModal(prevIndex);
  };
  const handleDownArrowClick = () => {
    const nextIndex =
      currentIndex < ContainerCardDesc.length - 1
        ? currentIndex + 1
        : currentIndex;
    openModal(nextIndex);
  };

  const handleKeyPress = (event) => {
    if (event.key === "ArrowRight") {
      handleRightArrowClick();
    } else if (event.key === "ArrowLeft") {
      handleLeftArrowClick();
    }
  };

  useEffect(() => {
    if (openExperience) {
      window.addEventListener("keydown", handleKeyPress);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [openExperience]);

  const currentCard = ContainerCardDesc[currentIndex];

  return (
    <div className="relative w-full min-h-screen overflow-hidden text-white font-Jost">
      <div className="absolute inset-0 bg-[url('../assets/rockBackground.png')] bg-cover bg-center opacity-20 z-0"></div>

      <div className="relative z-10 h-screen flex flex-col overflow-hidden">
        <div className="h-16 shrink-0">
          <Navbar />
        </div>
        <ContainerCard
          key={currentCard.id}
          {...currentCard}
          onArrowRight={handleRightArrowClick}
          onArrowLeft={handleLeftArrowClick}
          onArrowDown={handleDownArrowClick}
          onClick={() => openModal(currentIndex)}
          isId1={currentCard.id === 1}
          isId2={currentCard.id === 2}
          isId3={currentCard.id === 3}
        />
      </div>
    </div>
  );
};

export default Experience;
