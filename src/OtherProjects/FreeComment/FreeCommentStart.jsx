import React, { useState } from "react";

function FreeCommentStart(props) {
  const [saveUsername, setSaveUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    props.username(saveUsername);
    props.onClick();
  }

  return (
    <div class="flex flex-col items-center justify-center h-screen dark">
      <div class="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6">
        <h2 class="text-2xl font-bold text-gray-200 text-center mb-4">
          {props.text}
        </h2>

        <form onSubmit={handleSubmit} class="flex flex-col">
          <input
            onChange={(e) => setSaveUsername(e.target.value)}
            value={saveUsername}
            placeholder="Type Here.."
            class="bg-gray-700 text-center text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="text"
          />

          <button
            class="bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-green-600 hover:to-blue-600 transition ease-in-out duration-150"
            type="submit"
          >
            {props.enter}
          </button>
        </form>
      </div>
    </div>
  );
}

export default FreeCommentStart;
