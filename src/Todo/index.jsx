import React, { useState, useCallback } from "react";

import TodoComponent from "./components";

import { TASK_STATE } from "./constants";

const { PENDING, COMPLETED } = TASK_STATE;

const TodoContainer = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      status: PENDING,
      body: "Buy Grocery",
    },
    {
      id: 2,
      status: PENDING,
      body: "Study",
    },
    {
      id: 3,
      status: PENDING,
      body: "Write Assignments",
    },
  ]);

  const [task, setTask] = useState("");

  const statusHandler = useCallback(
    (id) => {
      let newTasks = tasks.map((task) => {
        if (task.id === id) {
          task.status = task.status === PENDING ? COMPLETED : PENDING;
        }
        return task;
      });

      setTasks(newTasks);
    },
    [tasks]
  );

  const handleTask = (e) => {
    setTask(e.target.value);
  };

  const addTask = useCallback(() => {
    let tempObj = {
      id: tasks.length + 1,
      status: PENDING,
      body: task,
    };

    setTasks([...tasks, tempObj]);
    setTask("");
  }, [task]);

  return (
    <TodoComponent
      tasks={tasks}
      setTasks={setTasks}
      statusHandler={statusHandler}
      task={task}
      setTask={setTask}
      handleTask={handleTask}
      addTask={addTask}
    />
  );
};

export default React.memo(TodoContainer);
