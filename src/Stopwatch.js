import React, { useState, useRef } from "react";
import start from "./images/play.png";
import stop from "./images/pause.png";
import reset from "./images/cancel.png";
import "./Stopwatch.css";

export default function Stopwatch(props) {
  const [timer, setTimer] = useState("00:00:00");
  const [active, setActive] = useState(false);

  let [milliseconds, seconds, minutes] = [0, 0, 0];
  let int = useRef(0);

  function startTimer() {
    if (!active) int.current = setInterval(() => showTime(), 10);
  }

  function stopTimer() {
    clearInterval(int.current);
  }

  function resetTimer() {
    setActive(false);
    clearInterval(int.current);
    [milliseconds, seconds, minutes] = [0, 0, 0];
    setTimer("00:00:00");
  }

  function showTime() {
    setActive(true);
    milliseconds += 10;

    if (milliseconds === 1000) {
      milliseconds = 0;
      seconds++;

      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }
    }
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds / 10;
    if (ms < 10) ms = ms + "0";

    setTimer(`${m}:${s}:${ms}`);
  }

  if (props.active) {
    return (
      <div className="Stopwatch popup">
        <p>STOPWATCH</p>
        <p className="timer">{timer}</p>
        <button onClick={startTimer} className="play">
          <img src={start} alt="start" />
        </button>
        <button onClick={stopTimer} className="stop">
          <img src={stop} alt="pause" />
        </button>
        <button onClick={resetTimer} className="reset">
          <img src={reset} alt="reset" />
        </button>
      </div>
    );
  } else return null;
}
