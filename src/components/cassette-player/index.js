"use client";
import { useState, useRef, useEffect } from "react";

import { useAudio } from "../Audio";

import CassettePlayerSvg from "./cassette-player";

export default function CassettePlayer({}) {
  //const [playing, setPlaying] = useState(false);

  const { playing, toggleAudio } = useAudio()
  return (
    <>
      <button
        onClick={toggleAudio}
        title='Play cassette audio'
      >
        <CassettePlayerSvg
          className="xl:w-[640px] lg:w-[512px] md:w-96 w-80 outline-none"
          whileHover={{
            scale: 1.01,
            transition: { duration: 0.3 },
          }}
          whileTap={{ scale: 0.9, transition: { duration: 0.1 } }}
          playing={playing}
        />
      </button>
    </>
  );
}
