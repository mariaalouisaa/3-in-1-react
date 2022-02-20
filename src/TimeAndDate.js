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
        <p className="TodayDate">
          {" "}
          {dateState.toLocaleDateString("en-GB", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
        <p className="TodayTime">
          {dateState.toLocaleString("en-GB", {
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            hour12: false,
          })}
        </p>
      </div>
    );
  } else return null;
}
