"use client";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks, deleteTask } from "../redux/taskSlice";
import { AppDispatch, RootState } from "../redux/store";

const TaskList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { tasks, loading, error } = useSelector((state: RootState) => state.tasks);
  const [client, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
    dispatch(fetchTasks());
  }, [dispatch]);

  if (!client) return null;

  if (loading) return <p>Loading tasks...</p>;
  if (error) return <p>Error: {error}</p>;


  return (
    <div className="container mt-4">
      <h2 className="mb-3">Task List</h2>
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Task</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={task._id}>
              <td>{index + 1}</td>
              <td>{task.text}</td>
              <td><button className="btn btn-danger" onClick={() => dispatch(deleteTask(task._id))}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
