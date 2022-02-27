import React, { useState } from "react";
import ReactDOM from "react-dom";
import data from "./todo.json";
import "./Todo.css";

export default function Todo(props) {
  const [toDoList, setToDoList] = useState(data);

  if (props.active) {
    function handleSubmit(e) {
      e.preventDefault();
      addItem(e.target.input.value);
    }

    function addItem(item) {
      setToDoList([...toDoList, item]);
    }

    return (
      <div className="Todo popup">
        <p>TO DO LIST</p>
        <form onSubmit={handleSubmit}>
          <label>What's on the agenda?</label>
          <br />
          <input type="text" name="input" autoComplete="off" />
          <input type="submit" value="+" />
          <div className="list">
            {toDoList.map((item, index) => {
              return <p key={index}>{item}</p>;
            })}
          </div>
        </form>
      </div>
    );
  } else return null;
}
