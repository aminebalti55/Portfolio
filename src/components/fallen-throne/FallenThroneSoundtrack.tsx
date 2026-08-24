"use client";

import { useEffect, useRef, useState } from "react";

type SoundState = "playing" | "blocked" | "muted";

export function FallenThroneSoundtrack() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [soundState, setSoundState] = useState<SoundState>("blocked");

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.34;

    const start = async () => {
      try {
        audio.muted = false;
        await audio.play();
        setSoundState("playing");
        return true;
      } catch {
        setSoundState("blocked");
        return false;
      }
    };

    void start();

    const unlock = () => {
      void start().then((started) => {
        if (!started) return;
        window.removeEventListener("pointerdown", unlock);
        window.removeEventListener("touchstart", unlock);
        window.removeEventListener("keydown", unlock);
      });
    };

    window.addEventListener("pointerdown", unlock, { passive: true });
    window.addEventListener("touchstart", unlock, { passive: true });
    window.addEventListener("keydown", unlock);

    return () => {
      window.removeEventListener("pointerdown", unlock);
      window.removeEventListener("touchstart", unlock);
      window.removeEventListener("keydown", unlock);
      audio.pause();
    };
  }, []);

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!audio.paused && soundState === "playing") {
      audio.pause();
      setSoundState("muted");
      return;
    }

    try {
      audio.muted = false;
      await audio.play();
      setSoundState("playing");
    } catch {
      setSoundState("blocked");
    }
  };

  const label = soundState === "playing"
    ? "Soundtrack on"
    : soundState === "muted"
      ? "Soundtrack off"
      : "Enter with sound";

  return (
    <div className="ft-soundtrack">
      <audio
        ref={audioRef}
        src="/audio/fallen-throne/background.mp3"
        preload="auto"
        autoPlay
        loop
        playsInline
      />
      <button type="button" onClick={toggle} aria-label={label} aria-pressed={soundState === "playing"}>
        <span aria-hidden="true">{soundState === "playing" ? "♫" : "♪"}</span>
        <strong>{label}</strong>
      </button>
    </div>
  );
}
