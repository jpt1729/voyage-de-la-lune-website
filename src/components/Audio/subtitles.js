"use client";
import { useAudio } from "@/components/Audio";

const subtitles = {
  "0:00": "Ok Houston, we've got a problem here",
  "0:03": "This is Houston staying in please",
  "0:05": "Uh, Houston we've had a problem",
  "0:08": "We've had a main debuff undervolt",
  "0:10": "Roger, main debuff undervolt",
  "0:13": "Ok standby 13, we're looking at it",
};

export default function Subtitle({}) {
  const { currentTime } = useAudio();

  const getSubtitleText = (time) => {
    const times = Object.keys(subtitles);
    let currentSubtitle = "";

    for (let i = 0; i < times.length; i++) {
      if (times[i] <= time) {
        currentSubtitle = subtitles[times[i]];
      } else {
        break;
      }
    }

    return currentSubtitle;
  };

  const subtitleText = getSubtitleText(currentTime);
  return (
    <div className="fixed md:bottom-3 bottom-20 left-1/2 -translate-x-1/2 bg-black/80 text-white px-6 py-1 text-xl lg:w-auto w-full" lang='EN-us'>
      <p>{subtitleText}</p>
    </div>
  );
}

export function EnableSubtitlesButton() {
  const { toggleSubtitles, subtitlesEnabled } = useAudio();
  return (
    <button
      onClick={toggleSubtitles}
      className={`hover:underline pl-1 outline-none border-none color-purple`}
      title='Enable subtitles for audio'
    >
      {subtitlesEnabled ? "(disable subtitles)" : "(enable subtitles)"}
    </button>
  );
}
