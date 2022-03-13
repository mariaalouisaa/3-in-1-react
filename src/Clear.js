import React, { useState } from "react";
import "./clear.css";

export default function Clear() {
  const [show, setShow] = useState(true);

  const clearList = (e) => {
    const listDiv = e.target.previousSibling;
    if (listDiv.classList.contains("list")) {
      while (listDiv.firstChild) {
        listDiv.removeChild(listDiv.firstChild);
      }
      // for some reason this is not deleting the last child

      //STILL NEED TO IMPLEMENT REMOVE BUTTON IF NO LIST ITEMS...
      //reset button display: block when new item added
      setShow(false);
    }
  };

  return (
    <button
      style={{ display: show ? "block" : "none" }}
      className="Clear"
      onClick={clearList}
    >
      CLEAR
    </button>
  );
}
