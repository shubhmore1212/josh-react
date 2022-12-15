import React from "react";

const InputTask = (props) => {
  const { task, handleTask, addTask } = props;

  return (
    <div className="add-task">
      <input
        type="text"
        className="add-textbox"
        onChange={handleTask}
        value={task}
      />
      <button onClick={addTask}>Add Task</button>
    </div>
  );
};

export default React.memo(InputTask);
