import "./Date.css";
import "./Home.css";

export default function Date(props) {
  if (props.active) {
    return (
      <div className="Date popup">
        <p>TODAYS DATE WILL GO HERE</p>
        <p>THE TIME WILL GO HERE HH:MM:SS</p>
      </div>
    );
  } else return null;
}
