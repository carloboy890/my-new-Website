import { div } from "framer-motion/client";
import React, { useState } from "react";
import QuizGameDesc from "../GameProject/QuizGameDesc";
import { createPortal } from "react-dom";

function QuizGame(props) {
  const subjects = ["Science", "Math", "Logic", "Bonus!"];
  const [clickEffect, setClickEffect] = useState("");
  const [quizBox, setQuizBox] = useState(false);
  const [hideSubject, setHideSubject] = useState(true);

  const randomQuestionIndex = Math.floor(
    Math.random() * QuizGameDesc[0].Science.length
  );
  const randomQuestion = QuizGameDesc[0].Science[randomQuestionIndex];

  function clickEffects(id) {
    setClickEffect(id);
  }

  function chooseSubjects() {
    return createPortal(
      <div className="absolute justify-center items-center flex flex-col bottom-100 left-165 modal h-60 w-200 bg-amber-50 rounded-4xl opacity-80 z-30">
        <p className="text-4xl font-bold">Choose A Subject!</p>
        <div className="mt-2 h-40 w-80 flex gap-4 justify-center flex-wrap">
          {subjects.map((value, i) => (
            <div
              onClick={() => {
                setQuizBox(!quizBox);
                setHideSubject(!hideSubject);
              }}
              className="border-3 hover:bg-amber-300 cursor-pointer w-30 pt-3 text-3xl font-medium text-center rounded-2xl "
            >
              {value}
            </div>
          ))}
        </div>
      </div>,
      document.getElementById("modal-root")
    );
  }

  return (
    <>
      <div className="relative flex justify-center items-center h-[100vh] border-white">
        {hideSubject && chooseSubjects()}
        {quizBox && (
          <div className="card3 flex flex-col">
            <div>
              <div
                className="h-50 text-2xl w-full mr-auto ml-auto bg-[#c5ac95] rounded-4xl"
                style={{
                  boxShadow: `
                8px 8px 15px rgba(0, 0, 0, 0.25),
                -8px -8px 15px rgba(255, 255, 255, 0.2)`,
                }}
              >
                {randomQuestion.Q1}
              </div>

              <div className="flex h-60 mt-10 flex-wrap gap-x-15 items-center justify-center">
                {randomQuestion.C1.map((item, i) => (
                  <button
                    key={i}
                    className={`h-15 w-60 rounded-4xl border-1 text-2xl cursor-pointer ${
                      clickEffect == i ? "bg-fuchsia-500" : null
                    }`}
                    onClick={() => clickEffects(i)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default QuizGame;

// <div
//   className="h-50 w-full mr-auto ml-auto bg-[#c5ac95] rounded-4xl"
//   style={{
//     boxShadow: `
//     8px 8px 15px rgba(0, 0, 0, 0.25),
//     -8px -8px 15px rgba(255, 255, 255, 0.2)`,
//   }}
// ></div>
// <div className="flex h-60 mt-10 flex-wrap gap-x-15 items-center justify-center">
//   {buttons.map((button, i) => (
//     <button
//       key={i}
//       className={`h-15 w-60 rounded-4xl border-1 text-4xl cursor-pointer ${
//         clickEffect == i ? "bg-fuchsia-500" : null
//       }`}
//       onClick={() => clickEffects(i)}
//     >
//       {button}
//     </button>
//   ))}
// </div>
