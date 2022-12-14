const ShowTask = (props) => {
  const tasks = props.tasks;

  return (
    <>
      <div className="show-task">
        {tasks.map((task, index) => {
          return (
            <div className="show-task-map" key={index}>
              <input
                className="show-task-input"
                type="checkbox"
                onChange={() => props.statusHandler(task.id, index)}
              />
              <label className="strikethrough">{task.body}</label>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ShowTask;
