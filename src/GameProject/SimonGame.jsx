import React, { useState } from "react";

function SimonGame() {
  const colors = ["bg-red-500", "bg-blue-500", "bg-yellow-500", "bg-green-500"];

  const [sequence, setSequence] = useState([]); // full sequence
  const [userStep, setUserStep] = useState(0); // user progress
  const [level, setLevel] = useState(1); // current level
  const [changeC, setChangeC] = useState(""); // blinking effect
  const [clickEffect, setClickEffect] = useState(null);
  const [wrong, setWrong] = useState(false);
  const [instruction, setInstruction] = useState(true);

  // Add new random step + play full sequence again
  function nextSequence() {
    const random = Math.floor(Math.random() * colors.length);

    // Add new random index
    setSequence((prev) => [...prev, random]);

    // Play entire sequence
    playSequence([...sequence, random]);
  }

  // Blink effect for the entire sequence
  function playSequence(seq) {
    let delay = 0;

    seq.forEach((index) => {
      setTimeout(() => {
        setChangeC(colors[index]);

        setTimeout(() => setChangeC(""), 200);
      }, delay);

      delay += 600;
    });
  }

  // Handle button click
  function clickedEffect(id) {
    setClickEffect(id);
    setTimeout(() => setClickEffect(null), 100);

    // CORRECT CLICK
    if (id === sequence[userStep]) {
      // Finished the whole sequence → next level
      if (userStep + 1 === sequence.length) {
        setLevel((prev) => prev + 1);
        setUserStep(0);
        setTimeout(() => nextSequence(), 800);
      }
      // Move to next number
      else {
        setUserStep((prev) => prev + 1);
      }
    }

    // WRONG CLICK
    else {
      console.log("❌ Wrong!");
      setWrong(true);

      setTimeout(() => setWrong(false), 1000);

      // Reset game
      setSequence([]);
      setUserStep(0);
      setLevel(1);

      setTimeout(() => nextSequence(), 1200);
    }
  }

  // 🔥 Start game after closing instructions
  function startGame() {
    setInstruction(false);
    setSequence([]);
    setUserStep(0);
    setLevel(1);

    setTimeout(() => nextSequence(), 500);
  }

  return (
    <>
      <div className="flex h-[100vh] justify-center items-center border-1">
        <div className="card flex flex-col items-center">
          <div className="text-white text-6xl h-25 pt-6 text-center">
            Level {level}
          </div>

          <div className="h- flex flex-wrap gap-10 items-center justify-center mt-10">
            {colors.map((value, i) => (
              <button
                key={i}
                onClick={() => clickedEffect(i)}
                className={`cursor-pointer ${value}
                h-50 w-50 rounded-3xl
                ${changeC === value ? "opacity-50 scale-110" : ""}
                ${clickEffect === i ? "opacity-50 scale-110" : ""}
              `}
              ></button>
            ))}

            {/* WRONG X NOTICE */}
            <div
              className="absolute text-red-800 text-[20rem]"
              style={{ display: wrong ? "block" : "none" }}
            >
              X
            </div>
          </div>
        </div>

        {/* INSTRUCTION POPUP */}
        {instruction && (
          <div className="absolute drop-shadow-xl w-250 h-80 overflow-hidden rounded-xl bg-[#3d3c3d] opacity-80">
            <div className="absolute text-center text-[1.5rem]/10 flex items-center justify-center text-white z-[1] opacity-90 rounded-xl inset-0.5 bg-[#323132]">
              Follow the color sequence and repeat it. Each level adds one new
              color. One mistake = restart!
            </div>

            <div
              onClick={startGame}
              className="absolute right-5 top-3 text-4xl z-1 cursor-pointer"
            >
              X
            </div>

            <div className="absolute w-56 h-100 bg-white blur-[50px] -left-1/2 -top-1/2"></div>
          </div>
        )}
      </div>
    </>
  );
}

export default SimonGame;

//random color into a function
//make an autoClick/changeColor button and bind it with the random color
//the change color function must corresponds with the random color after 0.1 seconds
//Now make an onClick function that when the button you click is == randomColor
//After level 1 if correct then the text will turn level 2,
//and the click will repeatedly be executed again after 2 secs but with another random click
//

//loop the 2 function that when in level 2, it will repeat the 1st randomPick then find a new randomPick

//After clicking firstPick() should reexecute, then randomPick() picks another color
//If the random color index of 1st pick == id that has been clicked then execute the same random color

//It needs to remember that firstPick() random color Id

//if the index of firstPick == randomPick index then repeat the firstPick function on level 2

//first exec is clickedEffect --> randomClick

//Id and randomIndex1 is equals since randonIndex1 is from firstPick()
