import React, { useState } from "react";
import data from "./todo.json";
import "./Todo.css";

export default function Todo(props) {
  const [toDoList, setToDoList] = useState(data);
  const [active, setActive] = useState("false");

  if (props.active) {
    function handleSubmit(e) {
      e.preventDefault();
      addItem(e.target.input.value);
    }

    function addItem(item) {
      setToDoList([...toDoList, item]);
    }

    const handleToggle = (e) => {
      console.log(e.target)
      setActive(!active);
    };

    const deleteItem = (e) => {
    e.target.parentElement.remove();
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
              return (
                <div key={`d${index}`} className={"Flex"}>
                <p
                  key={`p${index}`}
                  className={active ? null : "Strike"}
                  onClick={handleToggle}
                >
                  {item}
                </p>
                <button key={`b${index}`} className={"Delete"} onClick={deleteItem}>X</button>
                </div>
              );
            })}
          </div>
        </form>
      </div>
    );
  } else return null;
}
