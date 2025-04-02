import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTasks, deleteTask, updateTask } from "../redux/actions/taskActions";

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <button onClick={() => dispatch(updateTask(task.id, { completed: !task.completed }))}>
            {task.completed ? "Undo" : "Complete"}
          </button>
          <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;

