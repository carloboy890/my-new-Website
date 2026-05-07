import React, { useState, createContext, useEffect } from "react";
import askMeLogo from "../../assets/ProjectsLogos/OtherProjectsSVG/CommentAppWallpaper/askMeLogo.svg";
import communityLogo from "../../assets/ProjectsLogos/OtherProjectsSVG/CommentAppWallpaper/communityLogo.svg";
import AskMeChatField from "./AskMeChatField";
import CommunityChatField from "./CommunityChatField";

export const SwitchContext = createContext();

function UserFormInfo({ setOpenUserInfo, setSwitchField }) {
  return (
    <div className="h-full">
      <div
        onClick={() => {
          setOpenUserInfo(false);
          setSwitchField("AskMe");
        }}
        className="absolute left-30 top-17 transition-transform duration-200 hover:scale-110"
      >
        <img src={askMeLogo} alt="Ask Me" className="w-70 h-70" />
      </div>
      <div
        onClick={() => {
          setOpenUserInfo(false);
          setSwitchField("Community");
        }}
        className="absolute right-30 top-17 transition-transform duration-200 hover:scale-110"
      >
        <img src={communityLogo} alt="Community Logo" className="w-70 h-70" />
      </div>
    </div>
  );
}

export default UserFormInfo;
