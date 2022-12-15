import React from "react";

const TaskList = (props) => {
  const { tasks, statusHandler } = props;

  return (
    <div className="show-task">
      {tasks.map((task, index) => (
        <div className="show-task-map" key={index}>
          <input
            className="show-task-input"
            type="checkbox"
            onChange={() => statusHandler(task.id)}
          />
          <label className="strikethrough">{task.body}</label>
        </div>
      ))}
    </div>
  );
};

export default React.memo(TaskList);
