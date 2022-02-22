import "./Home.css";
import home from "./images/home.png";
import TimeAndDate from "./TimeAndDate";
import Todo from "./Todo";
import Stopwatch from "./Stopwatch";
import React, { useState } from "react";

export default function Home() {
  const [dateVis, setsetDatevis] = useState(false);
  const [todoVis, setsetTodovis] = useState(false);
  const [stopVis, setsetStopvis] = useState(false);

  function popUp(e) {
    if (e.target.name === "date") setsetDatevis(true);
    if (e.target.name === "todo") setsetTodovis(true);
    if (e.target.name === "stop") setsetStopvis(true);
  }

  return (
    <div>
      <button
        onClick={() => {
          setsetDatevis(false);
          setsetTodovis(false);
          setsetStopvis(false);
        }}
        className="homebutton"
      >
        <img src={home} alt={home} />
      </button>
      <div className="Home">
        <button name="date" onClick={popUp}>
          Time + Date
        </button>
        <button name="todo" onClick={popUp}>
          To-do {<br />}List
        </button>
        <button name="stop" onClick={popUp}>
          Stop- watch
        </button>
        <TimeAndDate active={dateVis} />
        <Todo active={todoVis} />
        <Stopwatch active={stopVis} />
      </div>
    </div>
  );
}
