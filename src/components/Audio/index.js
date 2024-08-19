"use client";
import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
} from "react";

import Subtitle, { subtitles } from "./subtitles";
const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
  const audioRef = useRef();
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState("0:00")
  const [subtitlesEnabled, setSubtitlesEnabled] = useState(false)
  useEffect(() => {
    const audio = audioRef.current;

    if (playing) {
      audio.play();
    } else {
      audio.pause();
    }
    const handleEnded = () => setPlaying(false);

    const handleTimeUpdate = () => {
      const minutes = Math.floor(audio.currentTime / 60);
      const seconds = Math.floor(audio.currentTime % 60);
      const formattedTime = `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
      setCurrentTime(formattedTime);
    };

    // Attach event listeners
    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("timeupdate", handleTimeUpdate);

    // Cleanup the event listener on unmount or when src changes
    return () => {
      audio.removeEventListener("ended", handleEnded);
    };
  }, [playing, setPlaying]);

  const toggleAudio = () => {
    setPlaying(!playing)
  }
  const toggleSubtitles = () => {
    setSubtitlesEnabled(!subtitlesEnabled)
  }
  return (
    <AudioContext.Provider value={{ toggleAudio, playing, subtitlesEnabled, toggleSubtitles, currentTime }}>
      {children}
      {(playing && subtitlesEnabled) && <Subtitle/>}
      <audio ref={audioRef} src={"/assets/audio.mp3"} className="hidden" />
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  return useContext(AudioContext);
};
