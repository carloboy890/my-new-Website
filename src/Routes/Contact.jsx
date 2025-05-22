import React from "react";
import HomeDesign from "../Components/HomeDesign";
import { useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar";
import ContactContainer from "../Components/ContactContainer";

const Contact = () => {
  const location = useLocation();
  return (
    <div className="relative w-full min-h-screen overflow-hidden text-white font-Jost">
      <div className="absolute inset-0 bg-[url('../assets/rockBackground.png')] bg-cover bg-center opacity-20 z-0"></div>

      <div className="relative z-10 flex flex-col h-screen overflow-hidden">
        <div className="h-16 shrink-0">
          <Navbar />
        </div>
        <div className="flex-grow overflow-hidden">
          <ContactContainer key={location.key} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
