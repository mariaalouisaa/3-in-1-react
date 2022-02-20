import React, { useState, useEffect } from "react";

import "./TimeAndDate.css";
import "./Home.css";

export default function TimeAndDate(props) {
  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 1000);
  }, []);
  if (props.active) {
    return (
      <div className="Date popup">
        <p className="TodayDate">
          {dateState.toLocaleDateString("en-GB", {
            weekday: "long",
            day: "numeric",
          })}
          <span>th</span>
        </p>
        <p className="TodayDate2">
          {dateState.toLocaleDateString("en-GB", {
            month: "long",
            year: "2-digit",
          })}
        </p>
        <p className="TodayTime">
          {dateState.toLocaleString("en-GB", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false,
          })}
        </p>
      </div>
    );
  } else return null;
}
