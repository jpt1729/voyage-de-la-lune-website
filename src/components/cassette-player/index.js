"use client";
import { useState, useRef, useEffect } from "react";

import CassettePlayerSvg from "./cassette-player";

export default function CassettePlayer({}) {
  const audioRef = useRef();
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    if (playing) {
      audio.play();
    } else {
      audio.pause();
    }
    const handleEnded = () => setPlaying(false);

    // Attach the event listener
    audio.addEventListener("ended", handleEnded);

    // Cleanup the event listener on unmount or when src changes
    return () => {
      audio.removeEventListener("ended", handleEnded);
    };
  }, [playing, setPlaying]);

  return (
    <>
      <button
        onClick={() => {
          setPlaying(!playing);
        }}
      >
        <CassettePlayerSvg
          className="xl:w-[870px] lg:w-[512px] md:w-96 w-64 outline-none"
          whileHover={{
            scale: 1.01,
            transition: { duration: 0.3 },
          }}
          whileTap={{ scale: 0.9, transition: { duration: 0.1 } }}
          playing={playing}
        />
        <audio ref={audioRef} src={"/audio.mp3"} className="hidden" />
      </button>
    </>
  );
}
