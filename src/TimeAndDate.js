import React, { useState, useEffect } from "react";

import "./TimeAndDate.css";
import "./Home.css";

export default function TimeAndDate(props) {
  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 30000);
  }, []);
  if (props.active) {
    return (
      <div className="Date popup">
        <p>TODAYS DATE WILL GO HERE</p>
        <p>
          {" "}
          {dateState.toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </p>
        <p>THE TIME WILL GO HERE HH:MM:SS</p>
        <p>
          {dateState.toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}
        </p>
      </div>
    );
  } else return null;
}
