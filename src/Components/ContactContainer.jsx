import HomeDesign from "./HomeDesign";
import followLogo from "../assets/followLogo.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LineStyle from "./LineStyle";
import ContactCard from "./ContactCard";
import ContactDesc from "./ContactDesc";
import ContactSM from "./ContactSM";
import ContactSMDesc from "./ContactSMDesc";
import { div } from "motion/react-client";
import ContactWaterSplash from "./ContactWaterSplash";

const ContactContainer = () => {
  const [waterAnimate, setWaterAnimate] = useState(false);
  const [showLogos, setShowLogos] = useState(false);
  const [hideClick, setHideClick] = useState(false);

  const handleClick = () => {
    setWaterAnimate(true);
    setShowLogos(false);
    setHideClick(true);

    setTimeout(() => {
      setShowLogos(true);
    }, 100);
  };

  const navigate = useNavigate();
  return (
    <HomeDesign>
      <div className="animate-fade-in relative text-white w-[100%] mr-auto ml-auto h-screen border-white font-Jost flex justify-center items-center">
        <div
          className="relative mb-10 w-full h-[80vh] bg-black/50 flex items-center max-w-screen-2xl
        max-2xl:h-[75vh] max-2xl:max-w-screen-xl max-h-900
        max-xl:max-w-screen-lg 
        max-lg:max-w-screen-md
        max-md:max-w-screen-sm max-md:flex-col max-md:overflow-y-scroll"
        >
          <button
            onClick={() => navigate("/")}
            className="animate-fade-in absolute top-5 right-5 z-50 text-white text-3xl font-bold px-3 rounded hover:bg-white/10 transition
            max-2xl:text-2xl
            max-md:hidden"
          >
            ×
          </button>
          {/* line container */}
          <LineStyle />

          {/* Left container */}

          <div
            sm
            cont
            className="animate-sm-lg w-[60%] ml-20 h-full
          max-xl:ml-10
           max-lg:ml-0
           max-md:text-center max-md:w-full
           max-sm:w-full"
          >
            <div
              className="p-15
            max-md:p-8
            max-sm:p-10"
            >
              {ContactDesc.map((value) => (
                <ContactCard
                  key={value.id}
                  question={value.question}
                  title={value.title}
                  inquiry={value.inquiry}
                  logo={value.logo}
                  description={value.description}
                  isId1={value.id === 1}
                  isId3={value.id === 2}
                  isId2={value.id === 3}
                />
              ))}
            </div>
          </div>
          {/* Right container */}
          <div sm cont right className="animate-sm-lg w-[45%] h-full">
            <div
              logo
              className="h-[40%] ml-10 flex
            max-2xl:mt-10
            max-md:hidden max-md:h-60"
            >
              <img
                src={followLogo}
                alt="followLogo"
                className="h-[320px] w-[320px] 
                max-lg:-ml-10"
              />
            </div>
            {showLogos && (
              <div
                className="flex gap-5 pl-20
              max-lg:gap-2 
              max-md:pl-0 max-md:gap-1 max-md:h-full
              max-sm:gap-0"
              >
                {ContactSMDesc.map((value) => (
                  <ContactSM
                    key={value.id}
                    link={value.link}
                    logo={value.logo}
                    isId1={value.id === 1}
                    isId2={value.id === 2}
                    isId3={value.id === 3}
                    isId4={value.id === 4}
                  />
                ))}
              </div>
            )}
            <ContactWaterSplash
              onWaterAnimate={waterAnimate}
              onHandleClick={handleClick}
              hideClick={hideClick}
            />
          </div>
        </div>
      </div>
    </HomeDesign>
  );
};

export default ContactContainer;
