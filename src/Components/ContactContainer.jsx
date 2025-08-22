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
          className="relative mb-10 w-full h-[80vh] bg-black/50 flex items-center max-w-screen-2xl
        max-2xl:h-[75vh] max-2xl:max-w-screen-xl max-h-900
        max-xl:max-w-screen-lg 
        max-lg:max-w-screen-md
        max-md:max-w-screen-sm max-md:flex-col max-md:overflow-y-scroll"
        >
          {/* <button
            onClick={() => navigate("/")}
            className="animate-fade-in absolute top-5 right-5 z-50 text-white text-3xl font-bold px-3 rounded hover:bg-white/10 transition
            max-2xl:text-2xl"
          >
            ×
          </button> */}
          {/* line container */}
          <div className="hidden 2xl:block animate-pic-slide2 absolute top-0 left-0">
            <div className="h-0.5 w-32 bg-white"></div>
            <div className="h-32 w-0.5 bg-white"></div>
          </div>
          <div className="hidden 2xl:block animate-pic-slide2 absolute bottom-0 left-0">
            <div className="h-0.5 w-32 bg-white"></div>
            <div className="h-32 w-0.5 bg-white absolute bottom-0"></div>
          </div>
          <div className="hidden 2xl:block animate-pic-slide1 absolute top-0 right-0">
            <div className="h-0.5 w-32 bg-white"></div>
            <div className="h-32 w-0.5 bg-white absolute right-0"></div>
          </div>
          <div className="hidden 2xl:block animate-pic-slide2 absolute bottom-0 right-0 rotate-180">
            <div className="h-0.5 w-32 bg-white"></div>
            <div className="h-32 w-0.5 bg-white"></div>
          </div>

          {/* Left container */}

          <div
            sm
            cont
            className="animate-sm-lg w-[60%] ml-20
          max-xl:ml-10
           max-lg:ml-0
           max-md:text-center 
           max-sm:w-full"
          >
            <div
              cont
              className="space-y-10 p-15
            max-sm:p-10 max-sm:space-y-6"
            >
              <div
                className="text-[2rem]
              max-2xl:text-[1.5rem]
              max-sm:text-[0.9rem]"
              >
                How can I help you?
              </div>
              <div
                className="text-[3rem]
              max-2xl:text-[2.5rem]
              max-lg:text-[2.3rem]
              max-sm:text-[1.5rem]"
              >
                CONTACT
              </div>
              <div
                className="text-[1.2rem]
              max-2xl:text-[1.1rem]
              max-lg:text-[1rem]
              max-sm:text-[0.8rem]"
              >
                I'm here to help and answer any questions you <br /> might have.
                I'm looking forward to hearing from you!
              </div>
            </div>
            <div
              cont
              className="flex
            max-md:justify-center"
            >
              <div
                cont
                logos
                className="space-y-8 ml-20
              max-md:ml-5
              max-sm:space-y-3 max-sm:mt-2.5
              "
              >
                <div>
                  <img
                    src={locationLogo}
                    alt="locationLogo"
                    className="h-[60px] w-[60px]
                    max-2xl:h-[40px] max-2xl:w-[40px] 
                    max-lg:h-[30px] max-lg:w-[30px]
                    max-sm:h-[20px] max-sm:w-[20px]"
                  />
                </div>
                <div>
                  <img
                    src={phoneLogo}
                    alt="phoneLogo"
                    className="h-[60px] w-[60px]
                    max-2xl:h-[40px] max-2xl:w-[40px] 
                    max-lg:h-[30px] max-lg:w-[30px]
                    max-sm:h-[20px] max-sm:w-[20px]"
                  />
                </div>
                <div>
                  <img
                    src={emailLogo}
                    alt="emailLogo"
                    className="h-[60px] w-[60px]
                    max-2xl:h-[40px] max-2xl:w-[40px] 
                    max-lg:h-[30px] max-lg:w-[30px]
                    max-sm:h-[20px] max-sm:w-[20px]"
                  />
                </div>
              </div>
              <div
                cont
                desc
                className="text-[1.5rem] mt-2 space-y-15 ml-10
              max-md:text-left
              max-2xl:text-[1.2rem]
              max-2xl:space-y-10 
              max-lg:text-[1rem] max-lg:space-y-9
              max-sm:space-y-4 max-sm:text-[0.7rem] max-sm:ml-6 max-sm:mt-3"
              >
                <div>Caloocan City, Metro Manila</div>
                <div>+639563370343</div>
                <div>carlo_damalerio@yahoo.com</div>
              </div>
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
                className="absolute flex gap-6 z-20 mt-18 ml-20
                max-xl:left-0 
                max-lg:-left-10
                max-sm:gap-4 max-sm:-left-18 max-sm:mt-12
                "
              >
                <a
                  href="https://www.facebook.com/yuyu.ki.31"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-3 h-10.5 w-10.5 animate-bounce rounded-full hover:scale-110 hover:shadow-lg hover:shadow-blue-100 transition duration-300 ease-in-out cursor-pointer 
                max-2xl:border-2 max-2xl:h-9.5 max-2xl:w-9.5
                max-sm:h-7.5 max-sm:w-7.5"
                >
                  <img
                    src={facebookLogo}
                    alt="facebookLogo"
                    className="h-[30px] w-[30px] mt-1 ml-0.5 
                    max-2xl:h-[20px] max-2xl:w-[20px] max-2xl:ml-1.5 max-2xl:mt-1.5 
                    max-sm:h-[15px] max-sm:w-[15px]"
                  />
                </a>
                <a
                  href="https://www.instagram.com/carloluwaa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="animate-bounce h-10.5 w-10.5 border-3 rounded-full hover:scale-110 hover:shadow-lg hover:shadow-pink-100 transition duration-300 ease-in-out cursor-pointer 
                max-2xl:border-2 max-2xl:h-9.5 max-2xl:w-9.5
                max-sm:h-7.5 max-sm:w-7.5"
                >
                  <img
                    src={instagramLogo}
                    alt="instagramLogo"
                    className="h-[20px] w-[20px] ml-2 mt-2 
                    max-2xl:h-[20px] max-2xl:w-[20px] max-2xl:ml-1.75 max-2xl:mt-1.75 
                    max-sm:h-[15px] max-sm:w-[15px] max-sm:mt-1.5 max-sm:ml-1.5"
                  />
                </a>
                <a
                  href="https://x.com/Carloluwaa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="animate-bounce h-10.5 w-10.5 rounded-full border-3 hover:scale-110 hover:shadow-lg hover:shadow-sky-100 transition duration-300 ease-in-out cursor-pointer 
                max-2xl:border-2 max-2xl:h-9.5 max-2xl:w-9.5
                max-sm:h-7.5 max-sm:w-7.5"
                >
                  <img
                    src={twitterLogo}
                    alt="twitterLogo"
                    className="h-[25px] w-[25px] mt-1.5 ml-1.5 
                    max-2xl:h-[20px] max-2xl:w-[20px] max-2xl:mt-1.75 max-2xl:ml-1.75 
                    max-sm:h-[15px] max-sm:w-[15px]"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/carlo-aramis-damalerio-164a73176/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="animate-bounce h-10.5 w-10.5 border-3 rounded-full hover:scale-110 hover:shadow-lg hover:shadow-pink-100 transition duration-300 ease-in-out cursor-pointer 
                max-2xl:border-2 max-2xl:h-9.5 max-2xl:w-9.5
                max-sm:h-7.5 max-sm:w-7.5"
                >
                  <img
                    src={linkedInLogo}
                    alt="instagramLogo"
                    className="h-[20px] w-[20px] ml-2 mt-2 
                    max-2xl:h-[20px] max-2xl:w-[20px] max-2xl:mt-1.75 max-2xl:ml-1.75 
                    max-sm:h-[15px] max-sm:w-[15px] max-sm:ml-1.5 max-sm:mt-1.5"
                  />
                </a>
              </div>
            )}

            <div
              animation
              className="mt-30 
              max-md:hidden"
            >
              {waterAnimate && (
                <img
                  src={waterSplash}
                  alt="WaterSplash"
                  className="h-[150px] w-[70%]
                  max-lg:w-[80%]"
                />
              )}
            </div>
            <div
              onClick={handleClick}
              className="left-30 top-130 hover:scale-105 transition duration-300 ease-in-out animate-pulse mt-10 cursor-pointer z-50 absolute h-[180px] w-[180px]
              max-2xl:-ml-0 max-2xl:top-130
              max-xl:-ml-5 
              max-md:top-0 max-md:-left-35
              max-sm:-left-20 max-sm:top-0"
              style={{ visibility: hideClick ? "hidden" : "visible" }}
            >
              <img
                src={clickHereLogo}
                alt="clickHere"
                className="h-full w-full pointer-events-auto 
                  max-2xl:h-[130px] max-2xl:w-[130px] 
                  max-sm:h-[80px] max-sm:w-[80px]"
              />
            </div>
          </div>
        </div>
      </div>
    </HomeDesign>
  );
};

export default ContactContainer;
