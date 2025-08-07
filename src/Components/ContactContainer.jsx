import HomeDesign from "./HomeDesign";
import locationLogo from "../assets/locationLogo.png";
import phoneLogo from "../assets/phoneLogo.png";
import emailLogo from "../assets/emailLogo.png";
import followLogo from "../assets/followLogo.png";
import waterSplash from "../assets/waterSplash.gif";
import clickHereLogo from "../assets/clickHereLogo.png";
import { useState } from "react";
import facebookLogo from "../assets/facebookLogo.png";
import instagramLogo from "../assets/instagramLogo.png";
import twitterLogo from "../assets/twitterLogo.png";
import linkedInLogo from "../assets/linkedInLogo.png";
import { useNavigate } from "react-router-dom";

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
          className="relative mb-10 w-[85%] h-[80vh] bg-black/50 flex items-center
        max-2xl:h-[70vh]"
        >
          <button
            onClick={() => navigate("/")}
            className="animate-fade-in absolute top-5 right-5 z-50 text-white text-3xl font-bold px-3 rounded hover:bg-white/10 transition
            max-2xl:text-2xl"
          >
            ×
          </button>
          <div sm cont className="animate-sm-lg w-[50%] h-[100%]">
            <div cont className="space-y-10 m-20">
              <div
                className="text-[2rem]
              max-2xl:text-[1.5rem]"
              >
                How can I help you?
              </div>
              <div
                className="text-[3rem]
              max-2xl:text-[2.5rem]"
              >
                CONTACT
              </div>
              <div
                className="text-[1.2rem]
              max-2xl:text-[1.1rem]"
              >
                I'm here to help and answer any questions you <br /> might have.
                I'm looking forward to hearing from you!
              </div>
            </div>
            <div cont className="flex">
              <div cont logos className="space-y-8 ml-20">
                <div>
                  <img
                    src={locationLogo}
                    alt="locationLogo"
                    className="h-[60px] w-[60px]
                    max-2xl:h-[40px] max-2xl:w-[40px]"
                  />
                </div>
                <div>
                  <img
                    src={phoneLogo}
                    alt="phoneLogo"
                    className="h-[60px] w-[60px]
                    max-2xl:h-[40px] max-2xl:w-[40px]"
                  />
                </div>
                <div>
                  <img
                    src={emailLogo}
                    alt="emailLogo"
                    className="h-[60px] w-[60px]
                    max-2xl:h-[40px] max-2xl:w-[40px]"
                  />
                </div>
              </div>
              <div
                cont
                desc
                className="text-[1.5rem] mt-2 space-y-15 ml-10
              max-2xl:text-[1.2rem]
              max-2xl:space-y-10"
              >
                <div>Caloocan City, Metro Manila</div>
                <div>+639563370343</div>
                <div>carlo_damalerio@yahoo.com</div>
              </div>
            </div>
          </div>
          <div sm cont right className="animate-sm-lg w-[50%] h-[100%]">
            <div logo className="h-[45%]">
              <img
                src={followLogo}
                alt="followLogo"
                className="h-[400px] w-[400px] ml-50 mt-[-40px]  animate-pulse
                max-2xl:h-[330px] max-2xl:w-[330px] max-2xl:mt-[-30px]"
              />
            </div>
            <div
              animation
              className=" relative mt-30
            max-2xl:ml-[-140px] max-2xl:mt-25"
            >
              {waterAnimate && (
                <img
                  src={waterSplash}
                  alt="WaterSplash"
                  className="h-[150px] w-[80%] ml-20 absolute top-0 z-10 pointer-events-none
                  max-2xl:z-1 max-2xl:h-[130px] max-2xl:w-[70%] max-2xl:ml-50"
                />
              )}
            </div>
            {showLogos && (
              <div
                className="absolute flex gap-6 mt-[-50px] ml-70 z-20 pointer-events-auto 
                max-2xl:z-21 max-2xl:ml-60 max-2xl:mt-[-60px]"
              >
                <div className="border-3 h-10.5 w-10.5 animate-bounce rounded-full hover:scale-110 hover:shadow-lg hover:shadow-blue-100 transition duration-300 ease-in-out cursor-pointer">
                  <img
                    src={facebookLogo}
                    alt="facebookLogo"
                    className="h-[30px] w-[30px] mt-1 ml-0.5"
                  />
                </div>
                <div className="animate-bounce h-10.5 w-10.5 border-3 rounded-full hover:scale-110 hover:shadow-lg hover:shadow-pink-100 transition duration-300 ease-in-out cursor-pointer">
                  <img
                    src={instagramLogo}
                    alt="instagramLogo"
                    className="h-[20px] w-[20px] ml-2 mt-2"
                  />
                </div>
                <div className="animate-bounce h-10.5 w-10.5 rounded-full border-3 hover:scale-110 hover:shadow-lg hover:shadow-sky-100 transition duration-300 ease-in-out cursor-pointer">
                  <img
                    src={twitterLogo}
                    alt="twitterLogo"
                    className="h-[25px] w-[25px] mt-1.5 ml-1.5"
                  />
                </div>
                <div className="animate-bounce h-10.5 w-10.5 border-3 rounded-full hover:scale-110 hover:shadow-lg hover:shadow-pink-100 transition duration-300 ease-in-out cursor-pointer">
                  <img
                    src={linkedInLogo}
                    alt="instagramLogo"
                    className="h-[20px] w-[20px] ml-2 mt-2"
                  />
                </div>
              </div>
            )}
            <div
              onClick={handleClick}
              className="left-80 top-120 hover:scale-105 transition duration-300 ease-in-out animate-pulse mt-10 cursor-pointer z-50 absolute h-[180px] w-[180px]
              max-2xl:left-70 max-2xl:top-110"
              style={{ visibility: hideClick ? "hidden" : "visible" }}
            >
              <img
                src={clickHereLogo}
                alt="clickHere"
                className="h-full w-full pointer-events-auto 
                  max-2xl:h-[130px] max-2xl:w-[130px]"
              />
            </div>
          </div>
        </div>
        <div
          className="animate-pic-slide2 absolute top-27.5 left-29 h-[20%] w-[20%]
        max-2xl:invisible"
        >
          <div className="h-0.5 w-[100%] mt-[-34px] ml-[27px] bg-white"></div>
          <div className="h-0.5 w-[100%] bg-white rotate-90 mt-47.5 ml-[-164px]"></div>
        </div>
        <div
          className="animate-pic-slide2 absolute bottom-[265px] left-29 h-[20%] w-[20%] 
        max-2xl:invisible"
        >
          <div className="h-0.5 w-[100%] mt-[340px] ml-[27px] bg-white"></div>
          <div className="h-0.5 w-[100%] rotate-90 ml-[-164px] mt-[-193px] bg-white"></div>
        </div>
        <div
          className="animate-pic-slide1 absolute top-27.5 right-29 h-[20%] w-[20%] 
        max-2xl:invisible"
        >
          <div className="h-0.5 w-[100%] mt-[-34px] ml-[-27px] bg-white"></div>
          <div className="h-0.5 w-[100%] bg-white rotate-90 mt-47.5 ml-[164px]"></div>
        </div>
        <div
          className="animate-pic-slide1 absolute bottom-[265px] right-29 h-[20%] w-[20%] 
        max-2xl:invisible"
        >
          <div className="h-0.5 w-[100%] mt-[340px] ml-[-27px] bg-white"></div>
          <div className="h-0.5 w-[100%] rotate-90 ml-[164px] mt-[-193px] bg-white"></div>
        </div>
      </div>
    </HomeDesign>
  );
};

export default ContactContainer;
