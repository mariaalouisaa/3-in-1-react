import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./Todo.css";

export default function Todo(props) {
  if (props.active) {
    function handleSubmit(e) {
      e.preventDefault();
      addItem(e.target.input.value);
    }

    function addItem(item) {
      let listItem = React.createElement("ul", {}, item);
      ReactDOM.render(listItem, document.querySelector(".list"));
    }

    return (
      <div className="Todo popup">
        <p>TO DO LIST</p>
        <form onSubmit={handleSubmit}>
          <label>What's on the agenda?</label>
          <br />
          <input type="text" name="input" autoComplete="off" />
          <input type="submit" value="+" />
          <div className="list"></div>
        </form>
      </div>
    );
  } else return null;
}
