import React from "react";

function Task({ category, text, eventCallback }) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={eventCallback} id={text}>X</button>
    </div>
  );
}

export default Task;