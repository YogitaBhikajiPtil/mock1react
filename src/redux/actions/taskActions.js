import { ref, push, update, remove, onValue } from "firebase/database";
import { database } from "../../firebase/firebaseConfig";

// Fetch all tasks
export const fetchTasks = () => (dispatch) => {
  const tasksRef = ref(database, "tasks");
  onValue(tasksRef, (snapshot) => {
    const tasks = snapshot.val() || {};
    dispatch({
      type: "FETCH_TASKS_SUCCESS",
      payload: Object.entries(tasks).map(([id, data]) => ({ id, ...data }))
    });
  });
};

// Add new task
export const addTask = (task) => async () => {
  await push(ref(database, "tasks"), task);
};

// Update existing task
export const updateTask = (taskId, updatedTask) => async () => {
  await update(ref(database, `tasks/${taskId}`), updatedTask);
};

// Delete task
export const deleteTask = (taskId) => async () => {
  await remove(ref(database, `tasks/${taskId}`));
};
