import React, { useState } from "react";
import data from "./todo.json";
import Clear from "./Clear";
import "./Todo.css";
import { click } from "@testing-library/user-event/dist/click";

export default function Todo(props) {
  const [toDoList, setToDoList] = useState(data);
  const [input, setInput] = useState("");
  if (props.active) {
    function handleSubmit(e) {
      e.preventDefault();
      if (e.target.input.value.length > 1) addItem(input);
      setInput("");
    }

    function addItem(item) {
      setToDoList([
        ...toDoList,
        { id: toDoList.length + 1, task: item, completed: false },
      ]);
    }

    const handleToggle = (e) => {
      let clicked = e.target.value;
      setToDoList(
        toDoList.map((item) => {
          if (item.id === Number(clicked) && item.completed) {
            return {
              id: item.id,
              task: item.task,
              completed: false,
            };
          } else {
            if (item.id === Number(clicked) && !item.completed) {
              return {
                id: item.id,
                task: item.task,
                completed: true,
              };
            } else return item;
          }
        })
      );
    };

    // setToDoList({...toDoList.map((item) => {

    const deleteItem = (e) => {
      e.target.parentElement.parentElement.remove();
    };

    const editItem = (e) => {
      const textElement = e.target.parentElement.previousSibling;
      textElement.contentEditable = "true";
      textElement.focus();
    };

    return (
      <div className="Todo popup">
        <p>TO DO LIST</p>
        <form onSubmit={handleSubmit}>
          <label>What's on the agenda?</label>
          <br />
          <input
            type="text"
            name="input"
            autoComplete="off"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <input type="submit" value="+" />
          <div className="list">
            {toDoList.map((item, index) => {
              return (
                <div key={item.id} className="Flex">
                  <p className={item.completed ? "Strike" : "Simple"}>
                    {item.task}
                  </p>
                  <div>
                    <button className="Edit" onClick={editItem}>
                      ✏️
                    </button>
                    <button className="Delete" onClick={deleteItem}>
                      🗑
                    </button>
                    <button
                      className="Done"
                      value={item.id}
                      onClick={handleToggle}
                    >
                      ✔️
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <Clear />
        </form>
      </div>
    );
  } else return null;
}
