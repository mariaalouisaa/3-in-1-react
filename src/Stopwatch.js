import "./Stopwatch.css";

export default function Stopwatch(props) {
  if (props.active) {
    return (
      <div className="Stopwatch popup">
        <p>STOPWATCH</p>
        <p>00:00:00</p>
        <button onclick="start()" className="play">
          <i class="fas fa-play"></i>
        </button>
        <button onclick="stop()" className="stop">
          <i class="fas fa-pause"></i>
        </button>
        <button onclick="reset()" className="reset">
          <i class="fas fa-times"></i>
        </button>
      </div>
    );
  } else return null;
}
