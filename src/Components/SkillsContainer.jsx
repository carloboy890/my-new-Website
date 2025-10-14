import React, { useState, useRef, useEffect } from "react";
import HomeDesign from "./HomeDesign";
import SkillCardDesc from "./SkillCardDesc";
import SkillCard from "./SkillCard";
import "./SkillsContainer.css";
import { useNavigate } from "react-router-dom";
import SkillMDcardDesc from "./SkillMDcardDesc";
import SkillMDcard from "./SkillMDcard";
import SkillToolsDesc from "./SkillToolsDesc";
import SkillsUpperLayer from "./SkillsUpperLayer";

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
      <div className="text-white w-full mr-auto ml-auto h-screen border-white font-Jost flex justify-center items-center">
        <div
          className="relative h-[85vh] w-full bg-black/50 overflow-scroll max-w-screen-2xl
          max-2xl:max-w-screen-xl
          max-xl:max-w-screen-lg
          max-lg:max-w-screen-md
          max-sm:w-full"
          ref={scrollRef}
        >
          <button
            onClick={() => navigate("/resume")}
            className="animate-fade-in absolute top-5 right-10 z-50 text-white text-3xl font-bold px-3 rounded hover:bg-white/10 transition
            max-2xl:text-2xl
            max-sm:hidden
            "
          >
            ×
          </button>
          <SkillsUpperLayer showDownArrow={showDownArrow} />
          <div
            className="flex flex-wrap justify-center mt-70 gap-5
          max-xl:space-y-30 
          max-md:hidden"
          >
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
          <div
            className="hidden
          max-md:block mt-10 w-full 
          max-sm:flex max-sm:flex-col max-sm:items-center"
          >
            {SkillMDcardDesc.map((value, index) => (
              <React.Fragment key={value.id}>
                {index === 0 && (
                  <div
                    className="w-2/3 ml-30 mt-5 
                  max-sm:ml-0"
                  >
                    <p className="font-bold text-center mb-10">
                      Basic Front-End Tools
                    </p>
                    <p
                      className="hidden max-md:block text-center mb-8 text-[0.9rem] 
                    max-sm:text-xs/7"
                    >
                      HTML provides the structure of a webpage, CSS adds styling
                      and layout to make it visually appealing, and JavaScript
                      brings interactivity and dynamic functionality, making the
                      three core technologies work together to build modern,
                      responsive websites.
                    </p>
                  </div>
                )}
                <SkillMDcard
                  key={value.id}
                  logo={value.logo}
                  tool={value.tool}
                  percentage={value.percentage}
                />
                {SkillToolsDesc[index] && (
                  <div
                    className="w-2/3 ml-30 mt-5
                  max-sm:ml-0"
                  >
                    <p className="font-bold text-center mb-10">
                      {SkillToolsDesc[index].title}
                    </p>
                    <p
                      className="hidden max-md:block text-center mb-8 text-[0.9rem] 
                    max-sm:text-xs/7"
                    >
                      {SkillToolsDesc[index].description}
                    </p>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </HomeDesign>
  );
};

export default SkillsContainer;
