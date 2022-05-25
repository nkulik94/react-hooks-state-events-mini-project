import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [taskList, updateList] = useState(TASKS)
  //const [listAfterDelete, updateFilter] = useState(taskList)
  const [selectedCat, changeCat] = useState('All')

  function handleDelete(newList) {
    updateList(newList)
  }

  const renderedList = taskList.filter(task => {
    if (selectedCat === 'All') return true

    return task.category === selectedCat
  })


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} updateList={changeCat} selectedCat={selectedCat} />
      <NewTaskForm />
      <TaskList taskList={renderedList} deleteCallback={handleDelete} />
    </div>
  );
}

export default App;
