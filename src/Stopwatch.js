import "./Stopwatch.css";
import start from "./images/play.png";
import stop from "./images/pause.png";
import cancel from "./images/cancel.png";

export default function Stopwatch(props) {
  if (props.active) {
    return (
      <div className="Stopwatch popup">
        <p>STOPWATCH</p>
        <p className="timer">00:00:00</p>
        <button onclick="start()" className="play">
          <img src={start} />
        </button>
        <button onclick="stop()" className="stop">
          <img src={stop} />
        </button>
        <button onclick="reset()" className="reset">
          <img src={cancel} />
        </button>
      </div>
    );
  } else return null;
}
