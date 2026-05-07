import React, { useContext } from "react";
import sadEmoji from "../../assets/ProjectsLogos/OtherProjectsSVG/CommentAppWallpaper/Emojis/sadEmoji.png";
import happyEmoji from "../../assets/ProjectsLogos/OtherProjectsSVG/CommentAppWallpaper/Emojis/happyEmoji.png";
import angryEmoji from "../../assets/ProjectsLogos/OtherProjectsSVG/CommentAppWallpaper/Emojis/angryEmoji.png";
import blowEmoji from "../../assets/ProjectsLogos/OtherProjectsSVG/CommentAppWallpaper/Emojis/blowEmoji.png";
import coolEmoji from "../../assets/ProjectsLogos/OtherProjectsSVG/CommentAppWallpaper/Emojis/coolEmoji.png";
import cryEmoji from "../../assets/ProjectsLogos/OtherProjectsSVG/CommentAppWallpaper/Emojis/cryEmoji.png";
import dieEmoji from "../../assets/ProjectsLogos/OtherProjectsSVG/CommentAppWallpaper/Emojis/dieEmoji.png";
import hugEmoji from "../../assets/ProjectsLogos/OtherProjectsSVG/CommentAppWallpaper/Emojis/hugEmoji.png";
import inLoveEmoji from "../../assets/ProjectsLogos/OtherProjectsSVG/CommentAppWallpaper/Emojis/inLoveEmoji.png";
import lolEmoji from "../../assets/ProjectsLogos/OtherProjectsSVG/CommentAppWallpaper/Emojis/lolEmoji.png";
import meltEmoji from "../../assets/ProjectsLogos/OtherProjectsSVG/CommentAppWallpaper/Emojis/meltEmoji.png";
import nerdyTongueEmoji from "../../assets/ProjectsLogos/OtherProjectsSVG/CommentAppWallpaper/Emojis/nerdyTongueEmoji.png";
import partyEmoji from "../../assets/ProjectsLogos/OtherProjectsSVG/CommentAppWallpaper/Emojis/partyEmoji.png";
import shockEmoji from "../../assets/ProjectsLogos/OtherProjectsSVG/CommentAppWallpaper/Emojis/shockEmoji.png";
import silentLaughEmoji from "../../assets/ProjectsLogos/OtherProjectsSVG/CommentAppWallpaper/Emojis/silentLaugh.png";
import superAngryEmoji from "../../assets/ProjectsLogos/OtherProjectsSVG/CommentAppWallpaper/Emojis/superAngryEmoji.png";
import thinkingEmoji from "../../assets/ProjectsLogos/OtherProjectsSVG/CommentAppWallpaper/Emojis/thinkingEmoji.png";
import { UsernameContext } from "./FreeCommentApp";

function ChatBubble({ isMine, messageSent }) {
  const { passedUsername, passedAdminUsername, switchField } =
    useContext(UsernameContext);

  const emojiMap = {
    ":sad:": sadEmoji,
    ":happy:": happyEmoji,
    ":angry:": angryEmoji,
    ":blow:": blowEmoji,
    ":cool:": coolEmoji,
    ":cry:": cryEmoji,
    ":die:": dieEmoji,
    ":hug:": hugEmoji,
    ":inLove:": inLoveEmoji,
    ":lol:": lolEmoji,
    ":melt:": meltEmoji,
    ":nerdyTongue:": nerdyTongueEmoji,
    ":party:": partyEmoji,
    ":shock:": shockEmoji,
    ":silentLaugh:": silentLaughEmoji,
    ":superAngry:": superAngryEmoji,
    ":thinking:": thinkingEmoji,
  };

  function renderTextWithEmoji(text) {
    return text.split(" ").map((word, i) => {
      if (emojiMap[word]) {
        return (
          <img
            key={i}
            src={emojiMap[word]}
            alt={word}
            className="inline w-6 h-6 mx-1"
          />
        );
      }

      return word + " ";
    });
  }

  return (
    <div className={`flex ${isMine ? "justify-end" : "justify-start"} w-full`}>
      <div
        className={`flex flex-col mt-2 w-fit max-w-lg border rounded-3xl p-3
      ${isMine ? "bg-blue-400 text-white" : "bg-gray-200 text-black"}`}
      >
        <div className="flex items-center space-x-1.5">
          <span className="text-sm font-semibold">{messageSent.username}</span>

          <span className="text-sm">11:46</span>
        </div>

        <p className="text-sm py-2.5 break-words whitespace-pre-wrap">
          {renderTextWithEmoji(messageSent.text)}
        </p>
      </div>
    </div>
  );
}

export default ChatBubble;
