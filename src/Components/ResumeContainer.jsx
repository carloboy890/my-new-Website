import "./ResumeContainer.css";
import React, { useState } from "react";
import prof2 from "../assets/profilePic2.png";
import SmCard from "./smCard";
import smCardsDes from "./smCardDes";
import HomeDesign from "./HomeDesign";
import ModalExperience from "./ModalExperience";
import Experience from "../Routes/Experience";
import { useNavigate } from "react-router-dom";

function ResumeContainer(props) {
  const navigate = useNavigate();
  const [openPic, setOpenPic] = useState(false);
  const [openAbout, setOpenAbout] = useState(false);
  const [openEducation, setOpenEducation] = useState(false);
  const [openExperience, setOpenExperience] = useState(false);

  return (
    <HomeDesign>
      <div className="overflow-hidden relative w-[100%] h-screen bg-transparent bg-body flex justify-center items-center border-white font-Jost">
        <div className="mb-10 w-[85%] h-[80vh] bg-black/50 flex items-center border-white">
          <div className="animate-pic-slide border-white w-[40%] h-[100%] space-y-10">
            <div className="text-white text-[4rem] font-bold text-center mt-10">
              RESUME
            </div>
            <div
              onClick={() => setOpenPic(true)}
              className="hover:shadow-buttonShadow cursor-pointer border-3 border-white h-[60%] w-[70%] rounded-[100%] ml-[15%]"
            >
              <img
                src={prof2}
                alt="Profile Picture 2"
                className="h-[100%] w-[100%] rounded-[100%]"
              />
            </div>
            {openPic ? (
              <div className="fixed inset-0 z-50 bg-black/70 flex justify-center items-center">
                <div className="bg-white p-4 rounded-lg animate-pop-out relative">
                  <button
                    className="absolute top-2 right-2 text-black text-xl"
                    onClick={() => setOpenPic(false)}
                  >
                    ✕
                  </button>
                  <img
                    src={prof2}
                    alt="Profile Full"
                    className="w-200 h-200 rounded"
                  />
                </div>
              </div>
            ) : null}
          </div>
          <div className=" border-white w-[60%] h-[100%] grid grid-cols-2 gap-4 p-8">
            {smCardsDes.map((value) => (
              <SmCard
                key={value.id}
                title={value.title}
                description={value.description}
                text={value.text}
                bg={
                  value.id === 2 || value.id === 3
                    ? "bg-black/70"
                    : "bg-transparent"
                }
                path={value.path}
                onClick={() => {
                  if (value.id === 1) {
                    navigate(value.path);
                  } else if (value.id === 2) {
                    navigate(value.path);
                  } else if (value.id === 3) {
                    navigate(value.path);
                  } else {
                    window.location.href = value.path;
                  }
                }}
              />
            ))}
            {/* {openAbout && <AboutModal onClose={() => setOpenAbout(false)} />} */}
            {/* {openEducation && (
              <ModalEducation onClose={() => setOpenEducation(false)} />
            )} */}
            {openExperience && (
              <ModalExperience onClose={() => setOpenExperience(false)}>
                <Experience />
              </ModalExperience>
            )}
          </div>
        </div>
      </div>
    </HomeDesign>
  );
}

export default ResumeContainer;
