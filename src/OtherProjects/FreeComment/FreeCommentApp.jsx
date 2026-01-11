import React, { useEffect, useState } from "react";
import FreeCommentAppCard from "../FreeComment/FreeCommentAppCard";
import FreeCommentStart from "../FreeComment/FreeCommentStart";

function FreeCommentApp() {
  const [passComment, setPassComment] = useState(() => {
    const saved = localStorage.getItem("comments");
    return saved ? JSON.parse(saved) : [];
  });

  const [start, setStart] = useState(true);

  const [theUsername, setTheUsername] = useState(() => {
    return localStorage.getItem("username") || "";
  });

  function getSubmit(comment) {
    setPassComment((prev) => [...prev, comment]);
  }

  function handleStart() {
    setStart(false);
  }

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(passComment));
  }, [passComment]);

  useEffect(() => {
    if (theUsername) {
      localStorage.setItem("username", theUsername);
    }
  }, [theUsername]);

  const passedUsername = (username) => {
    setTheUsername(username);
  };

  return start ? (
    <div>
      <FreeCommentStart
        username={passedUsername}
        text="Type Your Username"
        enter="Enter!"
        onClick={handleStart}
      />
    </div>
  ) : (
    <div className="border-white border-1 h-[100vh]">
      <div className="flex justify-center mt-20">
        <FreeCommentAppCard title="Send Feedback" comment={getSubmit} />
      </div>
      <div className="h-100 border-1 mt-20 w-full border-white text-white">
        {passComment.map((value, i) => {
          return (
            <div className="font-Jost text-3xl " key={i}>
              {theUsername} : {value}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FreeCommentApp;
