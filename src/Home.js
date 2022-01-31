import "./Home.css";
import Date from "./Date";
import Todo from "./Todo";
import Stopwatch from "./Stopwatch";

export default function Home() {
  return (
    <div className="Home">
      <button>Time + Date</button>
      <button>To-do {<br />}List</button>
      <button>Stop- watch</button>
      <Date active={false} />
      <Todo active={true} />
      <Stopwatch active={false} />
    </div>
  );
}
