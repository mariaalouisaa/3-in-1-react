import React, { useState, useEffect } from "react";
import start from "./images/play.png";
import stop from "./images/pause.png";
import reset from "./images/cancel.png";
import "./Stopwatch.css";

export default function Stopwatch(props) {
  const [timer, setTimer] = useState("00:00:00");

  let [milliseconds, seconds, minutes] = [0, 0, 0];
  let int = 0;

  function startTimer() {
    int = setInterval(() => showTime(), 10);
  }

  function stopTimer() {
    console.log("stop");
    clearInterval(int);
  }

  function resetTimer() {
    console.log("reset");
    clearInterval(int);
    [milliseconds, seconds, minutes] = [0, 0, 0];
    setTimer("00:00:00");
  }

  function showTime() {
    milliseconds += 10;

    if (milliseconds == 1000) {
      milliseconds = 0;
      seconds++;

      if (seconds == 60) {
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
          <img src={start} />
        </button>
        <button onClick={stopTimer} className="stop">
          <img src={stop} />
        </button>
        <button onClick={resetTimer} className="reset">
          <img src={reset} />
        </button>
      </div>
    );
  } else return null;
}
