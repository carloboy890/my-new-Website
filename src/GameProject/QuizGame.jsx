import { div, p } from "framer-motion/client";
import React, { useState, useEffect } from "react";
import QuizGameDesc from "../GameProject/QuizGameDesc";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";

function QuizGame(props) {
  const subjects = ["Science", "Math", "Logic", "Bonus!"];
  const [clickEffect, setClickEffect] = useState(null);
  const [quizBox, setQuizBox] = useState(false);
  const [hideSubject, setHideSubject] = useState(true);
  const [nextQ, setNextQ] = useState(0);
  const [score, setScore] = useState(0);
  const [topicQ, setTopicQ] = useState("");
  const [topicC, setTopicC] = useState([]);
  const [passSub, setPassSub] = useState("");
  const [mathExplanation, setMathExplanation] = useState(false);
  const [scoreEva, setScoreEva] = useState("");
  const navigate = useNavigate()

  const totalQuestions = QuizGameDesc[0].Science.length;

  /* Science Score */
  function nextPage(item) {
    let data;

    if (passSub === subjects[0]) {
      data = QuizGameDesc[0].Science;
    } else if (passSub === subjects[1]) {
      data = QuizGameDesc[0].Math;
    } else if (passSub === subjects[2]) {
      data = QuizGameDesc[0].Logic;
    } else {
      return;
    }

    const question = data[nextQ];
    if (!question) return;

    const Qanswer = question.A;

    if (String(item).trim() === String(Qanswer).trim()) {
      setScore((prev) => prev + 1);
    }

    setNextQ((prev) => prev + 1);
  }

  useEffect(() => {
    console.log("Score updated:", score);
  }, [score]);
  /* end of Science Score */

  function clickEffects(id) {
    setClickEffect(id);
    setTimeout(() => setClickEffect(null), 100);
  }

  function passSubject(value) {
    setPassSub(value);
  }
  useEffect(() => {
    let randomQuestion;

    if (passSub === subjects[0]) {
      randomQuestion = QuizGameDesc[0].Science[nextQ];
    } else if (passSub === subjects[1]) {
      randomQuestion = QuizGameDesc[0].Math[nextQ];
    } else if (passSub === subjects[2]) {
      randomQuestion = QuizGameDesc[0].Logic[nextQ];
    }

    if (!randomQuestion) return;

    setTopicQ(randomQuestion.Q1);
    setTopicC(randomQuestion.C1);
  }, [passSub, nextQ]);

  /* Modal */
  function chooseSubjects() {
    return createPortal(
      <div className="absolute justify-center items-center flex flex-col bottom-100 left-165 modal h-60 w-200 bg-amber-50 rounded-4xl opacity-80 z-30">
        <p className="text-4xl font-bold">Choose A Subject!</p>
        <div className="mt-2 h-40 w-80 flex gap-4 justify-center flex-wrap">
          {subjects.map((value, i) => (
            <div
              key={i}
              onClick={() => {
                setQuizBox(!quizBox);
                setHideSubject(!hideSubject);
                passSubject(value);
                showExplanation(value);
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
  /* end of modal */

  function showExplanation(value) {
    if (subjects[1] === value) {
      setMathExplanation(true);
    }
  }

  function scoreDesc() {
    let text = "";

    if (score == 10) text = "Excellent!";
    else if (score >= 7) text = "Good Job!";
    else if (score >= 4) text = "Not bad";
    else text = "Study Harder!";

    setScoreEva(text);
  }
  useEffect(() => {
    if (nextQ >= totalQuestions) {
      scoreDesc(); // ✔ runs once when quiz ends
    }
  }, [nextQ]);

  /* Modal Score card */

  if (nextQ >= totalQuestions) {
    const mathData = QuizGameDesc[0].Math;
    console.log(mathData);
    return createPortal(
      <div className="flex flex-col space-y-10 h-auto justify-center items-center">
        <p className="text-5xl font-bold text-white mt-50 ">{scoreEva}</p>
        <div className="border-1 mb-20 text-white h-30 w-100 flex justify-center items-center">
          <p className="text-2xl font-bold ">Your score is {score}</p>
        </div>
        {mathExplanation && (
          <>
            {mathData.map((item, i) => (
              <div
                className="p-5 border-1 rounded-4xl h-auto w-310 text-2xl bg-amber-100 text-black"
                style={{ whiteSpace: "pre-wrap" }}
              >
                {item.Explanation}
              </div>
            ))}
          </>
        )}
      </div>,
      document.getElementById("modal-result")
    );
  }

  /* end of Modal Score card */

  return (
    <>
      {" "}
      {/* Quiz Box */}
      <div className="relative flex justify-center items-center h-[100vh] border-white">
        {hideSubject && chooseSubjects()}
        {quizBox && (
          <div className="card3 flex flex-col">
            <div>
              <div
                className="h-60 p-5 text-xl w-full mr-auto ml-auto bg-[#c5ac95] rounded-4xl"
                style={{
                  boxShadow: `
                8px 8px 15px rgba(0, 0, 0, 0.25),
                -8px -8px 15px rgba(255, 255, 255, 0.2)`,
                  whiteSpace: "pre-wrap",
                  lineHeight: "1.5",
                  fontWeight: "bold",
                }}
              >
                {topicQ}
              </div>

              <div className="flex h-60 mt-10 flex-wrap gap-x-5 items-center justify-center">
                {topicC.map((item, i) => (
                  <button
                    key={i}
                    className={`h-15 w-70 rounded-4xl font-medium border-1 text-xl cursor-pointer ${
                      clickEffect == i ? "bg-fuchsia-500" : null
                    }`}
                    onClick={() => {
                      clickEffects(i);
                      nextPage(item);
                    }}
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
