import React, { useState, useRef, useEffect } from "react";
import start from "./images/play.png";
import stop from "./images/pause.png";
import reset from "./images/cancel.png";
import "./Stopwatch.css";

export default function Stopwatch(props) {
  const [milliseconds, setMilliseconds] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  // need to set isActive when timer is going to avoid a bug where the timer speeds up on muliply click of the play button
  const [isActive, setIsActive] = useState(false);
  const [timer, setTimer] = useState("00:00:00");

  useEffect(() => {
    if (isActive) {
      if (milliseconds === 1000) {
        setMilliseconds(0);
        setSeconds((prev) => prev + 1);
      }
      if (seconds === 60) {
        setSeconds(0);
        setMinutes((prev) => prev + 1);
      }
    }
    setTimer(
      `${minutes < 10 ? "0" + minutes : minutes}:${
        seconds < 10 ? "0" + seconds : seconds
      }:${
        milliseconds >= 100
          ? milliseconds / 10
          : milliseconds < 10
          ? "0" + milliseconds
          : milliseconds
      }`
    );
  }, [milliseconds, seconds, minutes, isActive]);

  // useRef used here to keep track of the timer when the timer is paused it can pick up where it left off
  let int = useRef(0);

  // Called onlick of play button - begins a timer to call function every millisecond
  function startTimer() {
    if (!isActive) {
      setIsActive(true);
      int.current = setInterval(() => triggerUseEfffect(), 10);
    }
  }

  // every millisecond the use effect will be called to update time without rerendering the page
  function triggerUseEfffect() {
    setMilliseconds((prev) => (prev += 10));
  }

  // stop setIntervel timer
  function pauseTimer() {
    setIsActive(false);
    clearInterval(int.current);
  }

  function resetTimer() {
    setIsActive(false);
    clearInterval(int.current);
    setMilliseconds(0);
    setSeconds(0);
    setMinutes(0);
    setTimer("00:00:00");
  }

  if (props.active) {
    return (
      <div className="Stopwatch popup">
        <p>STOPWATCH</p>
        <p className="timer">{timer}</p>
        <button onClick={startTimer} className="play">
          <img src={start} alt="start" />
        </button>
        <button onClick={pauseTimer} className="stop">
          <img src={stop} alt="pause" />
        </button>
        <button onClick={resetTimer} className="reset">
          <img src={reset} alt="reset" />
        </button>
      </div>
    );
  } else return null;
}
