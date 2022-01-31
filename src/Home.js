import "./Home.css";
import home from "./images/home.png";
import Date from "./Date";
import Todo from "./Todo";
import Stopwatch from "./Stopwatch";
import { useState } from "react/cjs/react.development";

export default function Home() {
  const [dateVis, setsetDatevis] = useState(false);
  const [todoVis, setsetTodovis] = useState(false);
  const [stopVis, setsetStopvis] = useState(false);

  function popUp(e) {
    if (e.target.name === "date") setsetDatevis(true);
    if (e.target.name === "todo") setsetTodovis(true);
    if (e.target.name === "stop") setsetStopvis(true);
  }

  function resetHome() {
    setsetDatevis(false);
    setsetTodovis(false);
    setsetStopvis(false);
  }

  return (
    <div>
      <button onClick={resetHome} className="homebutton">
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
        <Date active={dateVis} />
        <Todo active={todoVis} />
        <Stopwatch active={stopVis} />
      </div>
    </div>
  );
}
