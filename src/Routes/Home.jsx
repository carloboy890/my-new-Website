import React from "react";
import { useState } from "react";
import Navbar from "../Components/Navbar";
import HomeContainer from "../Components/HomeContainer";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();

  return (
    <div className="relative w-full min-h-screen overflow-hidden font-Jost text-white">
      <div
        className={`absolute inset-0 bg-[url('../assets/rockBackground.png')] bg-cover bg-center opacity-15`}
      ></div>
      <div className="relative z-10 flex flex-col h-screen overflow-hidden">
        <div className="h-16 shrink-0">
          <Navbar />
        </div>
        <div className="flex-grow overflow-hidden">
          <HomeContainer key={location.key} />
        </div>
      </div>
    </div>
  );
};

export default Home;
