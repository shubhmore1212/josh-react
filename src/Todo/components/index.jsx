import React from "react";

import InputTask from "./InputTask";
import TaskList from "./TaskList";

const TodoComponent = (props) => {
  const { tasks, statusHandler, task, handleTask, addTask } = props;

  return (
    <div className="ToDoApp">
      <h1>To do</h1>
      <TaskList tasks={tasks} statusHandler={statusHandler} />
      <InputTask task={task} handleTask={handleTask} addTask={addTask} />
    </div>
  );
};

export default React.memo(TodoComponent);
