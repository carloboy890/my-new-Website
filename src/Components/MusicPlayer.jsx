import React, { useEffect, useRef } from "react";
import musicTheme from "../assets/MusicTheme/Cloud9.mp3";

const MusicPlayer = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current.play().catch(() => {
      console.log("Autoplay blocked. User must interact.");
    });
  }, []);

  return <audio ref={audioRef} src={musicTheme} loop />;
};

export default MusicPlayer;
