import React from "react";
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
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function EmojiComponent({ setChatText }) {
  const allEmojis = [
    { token: ":sad:", img: sadEmoji },
    { token: ":happy:", img: happyEmoji },
    { token: ":angry:", img: angryEmoji },
    { token: ":blow:", img: blowEmoji },
    { token: ":cool:", img: coolEmoji },
    { token: ":cry:", img: cryEmoji },
    { token: ":die:", img: dieEmoji },
    { token: ":hug:", img: hugEmoji },
    { token: ":inLove:", img: inLoveEmoji },
    { token: ":lol:", img: lolEmoji },
    { token: ":melt:", img: meltEmoji },
    { token: ":nerdyTongue:", img: nerdyTongueEmoji },
    { token: ":party:", img: partyEmoji },
    { token: ":shock:", img: shockEmoji },
    { token: ":silentLaugh:", img: silentLaughEmoji },
    { token: ":superAngry:", img: superAngryEmoji },
    { token: ":thinking:", img: thinkingEmoji },
  ];

  const mapEmojis = allEmojis.map((emoji, i) => {
    return (
      <SwiperSlide key={i} className="">
        <div className="h-20 items-center flex justify-center">
          <img
            onClick={() => setChatText((prev) => prev + " " + emoji.token)}
            src={emoji.img}
            alt="emoji"
            className="w-12 h-12 cursor-pointer hover:scale-110 transition duration-200"
          />
        </div>
      </SwiperSlide>
    );
  });

  return (
    <Swiper
      className="max-md:h-80"
      modules={[Navigation]}
      slidesPerView={4}
      spaceBetween={10}
      navigation
      breakpoints={{
        320: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1536: { slidesPerView: 4 },
      }}
    >
      {mapEmojis}
    </Swiper>
  );
}

export default EmojiComponent;
