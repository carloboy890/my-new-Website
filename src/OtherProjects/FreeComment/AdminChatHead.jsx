import React, { useState } from "react";
import MessageBoxTheme from "../../assets/ProjectsLogos/OtherProjectsSVG/CommentAppWallpaper/MessageBoxTheme.svg";
import MessageAlert from "../../assets/ProjectsLogos/OtherProjectsSVG/CommentAppWallpaper/MessageAlert.svg";

function AdminChatHead({
  setOpenChatHead,
  messageSent,
  passedUsername,
  readCounts,
}) {
  const users = [
    ...new Set(
      messageSent
        .map((msg) => msg.username)
        .filter((username) => username !== "admin8080"),
    ),
  ];

  const unreadUsers = users.filter((username) => {
    const conversationId = [username, "admin8080"].sort().join("_");

    const userMessages = messageSent.filter(
      (msg) => msg.conversationId === conversationId && msg.role === "user",
    );

    const totalUserMessages = userMessages.length;

    const unreadCount = totalUserMessages - (readCounts[username] || 0);

    return unreadCount > 0;
  });

  const textCount = unreadUsers.length;

  return (
    <div
      onClick={() => setOpenChatHead((prev) => !prev)}
      className="fixed right-20 top-205 hover:scale-110 transition duration-300"
    >
      <span className="font absolute text-[0.6rem] text-white top-8.5 left-35 z-10 font-Jost">
        {textCount}
      </span>

      <img
        src={MessageAlert}
        className="h-15 w-15 scale absolute cursor-pointer right-31 top-4"
        alt="Message Alert"
      />

      <img
        src={MessageBoxTheme}
        className="h-30 w-75 cursor-pointer"
        alt="Message Box Theme"
      />

      <div className="font-Jost absolute cursor-pointer top-20 left-27 font-bold text-xl z-10">
        Message
      </div>
    </div>
  );
}

export default AdminChatHead;
