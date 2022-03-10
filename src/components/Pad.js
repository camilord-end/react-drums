import React, { useEffect, useState } from "react";

export default function Pad({ clip, volume, setText }) {
  const [active, setActive] = useState(false);

  const playSound = () => {
    const audioTag = document.getElementById(clip.keyTrigger);
    audioTag.currentTime = 0;
    audioTag.play();
    audioTag.volume = volume;
    setText(clip.id)
    setActive(true);
    setTimeout(() => setActive(false), 300);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  const handleKeyDown = (event) => {
    if (event.keyCode === clip.keyCode) {
      playSound();
    }
  };

  return (
    <div
      className={`drum-pad btn btn-secondary p-3 m-1 ${
        active && "btn-success"
      }`}
      id={clip.id}
      onClick={playSound}
    >
      <audio className="clip" id={clip.keyTrigger} src={clip.url} />
      {clip.keyTrigger}
    </div>
  );
}
