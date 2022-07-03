import React, { useState } from "react";
import "./clear.css";

export default function Clear() {
  //const [show, setShow] = useState(true);

  const clearList = (e) => {
    const listDiv = e.target.previousSibling;
    if (listDiv.classList.contains("list")) {
      while (listDiv.firstChild) {
        listDiv.removeChild(listDiv.firstChild);
      }

      //setShow(false);
    }
  };

  return (
    <button
      // style={{ display: show ? "block" : "none" }}
      className="Clear"
      onClick={clearList}
    >
      CLEAR
    </button>
  );
}
