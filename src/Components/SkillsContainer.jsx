import React, { useState, useRef, useEffect } from "react";
import facingComp from "../assets/facingComp.png";
import arrowDown from "../assets/arrowDown.png";
import skillLogo from "../assets/skillLogo.png";
import HomeDesign from "./HomeDesign";
import SkillCardDesc from "./SkillCardDesc";
import SkillCard from "./skillCard";
import "./SkillsContainer.css";
import { useNavigate } from "react-router-dom";

const SkillsContainer = () => {
  const [showDownArrow, setShowDownArrow] = useState(true);
  const [visibleCards, setVisibleCards] = useState([]);
  const scrollRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current) return;
      const scrollTop = scrollRef.current.scrollTop;
      setShowDownArrow(scrollTop <= 10);
    };

    const el = scrollRef.current;
    if (el) el.addEventListener("scroll", handleScroll);
    return () => el && el.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.dataset.index, 10);
          if (entry.isIntersecting && !visibleCards.includes(index)) {
            setVisibleCards((prev) => [...prev, index]);
          }
        });
      },
      { threshold: 0.3 }
    );

    cardRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () =>
      cardRefs.current.forEach((ref) => ref && observer.unobserve(ref));
  }, [visibleCards]);

  const navigate = useNavigate();

  return (
    <HomeDesign>
      <div className="text-white w-[90%] mr-auto ml-auto h-screen border-white font-Jost flex justify-center items-center">
        <div
          className="relative h-[90vh] w-full bg-black/50 overflow-scroll max-w-screen-2xl
          max-2xl:max-w-screen-xl
          max-xl:max-w-screen-lg
          max-lg:max-w-screen-md"
          ref={scrollRef}
        >
          <button
            onClick={() => navigate("/resume")}
            className="animate-fade-in absolute top-5 right-10 z-50 text-white text-3xl font-bold px-3 rounded hover:bg-white/10 transition
            max-2xl:text-2xl"
          >
            ×
          </button>
          <div className="w-full animate-pic-slide">
            <div
              className="font-bold text-center text-[5rem] mb-2
            max-2xl:text-[3.5rem]
            max-xl:text-[3rem]"
            >
              SKILLS
            </div>
            <div className="h-0.5 bg-white mr-auto ml-auto w-60 right-0"></div>
          </div>

          <div className="flex w-full">
            <div className="w-[30%] flex justify-center items-center animate-pic-slide">
              <img
                src={facingComp}
                alt="facingComp"
                className="h-[430px] w-[430px] ml-10
                max-2xl:h-[300px]
                max-lg:h-[200]"
              />
            </div>

            <div className="space-y-10 p-15 w-[70%] animate-pic-slide2">
              <div className="flex justify-end">
                <img
                  src={skillLogo}
                  alt="skillLogo"
                  className="w-[110px] h-[110px]
                  max-2xl:w-[70px] max-2xl:h-[70px]"
                />
              </div>

              <div
                className="text-[1.3rem] text-justify leading-10 
              max-2xl:text-[1.2rem]
              max-xl:text-[1rem]
              max-lg:text-[0.8rem]"
              >
                A Front End Developer crafts the user-facing aspects of websites
                and applications, ensuring a seamless and engaging experience
                for users. They use programming languages like HTML, CSS, and
                JavaScript to design and implement the visual layout, styling,
                and interactivity of a website or application. Anytime you enjoy
                the look and feel of a digital product, website, or application,
                you have a front-end developer to thank.
              </div>

              {showDownArrow && (
                <div
                  className="min-h-[100px] mt-8 flex justify-center
                max-2xl:mt-15"
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
          <div className="flex flex-wrap justify-center mt-70 gap-5 max-xl:space-y-30">
            {SkillCardDesc.map((value, index) => (
              <div
                key={value.id}
                ref={(el) => (cardRefs.current[index] = el)}
                data-index={index}
                className={`transition-opacity duration-700 ${
                  visibleCards.includes(index)
                    ? index % 2 === 0
                      ? "animate-left"
                      : "animate-right"
                    : "opacity-0"
                }`}
              >
                <SkillCard
                  logo={value.logo}
                  circleAnimation={value.circleAnimation}
                  title={value.title}
                  description={value.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </HomeDesign>
  );
};

export default SkillsContainer;
