import React from "react";
import Task from "./Task";

function TaskList({ taskList, deleteCallback }) {
  
  const renderedList = taskList.map(task => {
    return <Task key={task.text} category={task.category} text={task.text} eventCallback={deleteTask}/>
  })

  function deleteTask(e) {
    const newList = taskList.filter(task => task.text !== e.target.id)
    deleteCallback(newList)
  }

  return (
    <div className="tasks">
      {renderedList}
    </div>
  );
}

export default TaskList;