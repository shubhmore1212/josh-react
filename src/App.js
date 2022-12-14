import { useState } from "react";
import ShowTask from "./Pages/ShowTask";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      status: "pending",
      body: "Buy Grocery",
    },
    {
      id: 2,
      status: "pending",
      body: "Study",
    },
    {
      id: 3,
      status: "pending",
      body: "Write Assignments",
    },
  ]);

  const [newTask, setNewTask] = useState("");

  const newTaskHandler = (e) => {
    console.log(e.target.value);

    setNewTask(e.target.value);
  };

  const addTask = (e) => {
    let tempObj = {
      id: tasks[tasks.length - 1].id + 1,
      status: "pending",
      body: newTask,
    };
    console.log(tempObj, tasks);
    tasks.push(tempObj);
    const tempTasks = tasks;

    setTasks([...tasks]);
    setNewTask("");
  };

  const statusHandler = (id, index) => {
    let doneTask = tasks.filter((task) => task.id === id);
    let currentStatus = doneTask[0].status;

    if (currentStatus === "pending") {
      currentStatus = "completed";
    } else {
      currentStatus = "pending";
    }

    tasks[index].status = currentStatus;
    setTasks([...tasks]);
  };

  return (
    <>
      <div className="ToDoApp">
        <h1>To do</h1>
        <ShowTask tasks={tasks} statusHandler={statusHandler} />
        <br />
        <br />
        <div className="add-task">
          <input
            type="text"
            className="add-textbox"
            onChange={newTaskHandler}
            value={newTask}
          />
          <button onClick={addTask}>Add Task</button>
        </div>
      </div>
    </>
  );
}

export default App;
