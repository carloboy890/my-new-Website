import React from "react";
import facingComp from "../assets/facingComp.png";
import arrowDown from "../assets/arrowDown.png";
import skillLogo from "../assets/skillLogo.png";

function SkillsUpperLayer(props) {
  return (
    <>
      <div className="w-full animate-pic-slide">
        <div
          className="font-bold text-center text-[5rem] mb-2
                max-2xl:text-[3.5rem]
                max-xl:text-[3rem]
                max-sm:text-[2rem] max-sm:mt-10"
        >
          SKILLS
        </div>
        <div className="h-0.5 bg-white mr-auto ml-auto w-60 right-0"></div>
      </div>

      <div className="flex w-full">
        <div className="max-sm:hidden w-[30%] flex justify-center items-center animate-pic-slide">
          <img
            src={facingComp}
            alt="facingComp"
            className="h-[430px] w-[430px] ml-10
                    max-2xl:h-[300px]
                    max-lg:h-[200] "
          />
        </div>

        <div
          className="space-y-10 p-15 w-[70%] animate-pic-slide2 
                max-sm:w-full max-sm:p-5"
        >
          <div className="flex justify-end">
            <img
              src={skillLogo}
              alt="skillLogo"
              className="w-[110px] h-[110px]
                      max-2xl:w-[70px] max-2xl:h-[70px]
                      max-sm:hidden"
            />
          </div>

          <div
            className="text-[1.3rem] text-justify leading-10
                  max-2xl:text-[1.2rem]
                  max-xl:text-[1rem]
                  max-lg:text-[0.9rem]
                  max-sm:text-center max-sm:text-xs/8"
          >
            A Front End Developer crafts the user-facing aspects of websites and
            applications, ensuring a seamless and engaging experience for users.
            They use programming languages like HTML, CSS, and JavaScript to
            design and implement the visual layout, styling, and interactivity
            of a website or application. Anytime you enjoy the look and feel of
            a digital product, website, or application, you have a front-end
            developer to thank.
          </div>

          {props.showDownArrow && (
            <div
              className="min-h-[100px] mt-8 flex justify-center
                    max-2xl:mt-15 
                    max-sm:hidden"
            >
              <img
                src={arrowDown}
                alt="arrowDown"
                className="animate-bounce h-[100px] w-[100px] mr-100 mt-10
                        max-2xl:h-[80px] max-2xl:w-[80px]
                        max-lg:h-[60px] max-lg:ml-20"
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default SkillsUpperLayer;
