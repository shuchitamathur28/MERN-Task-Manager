import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/taskSlice";
import { AppDispatch } from "../redux/store";

const TaskForm = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim() !== "") {
      dispatch(addTask(text));
      setText("");
    }
  };

  return (
    <div className="container mt-4">
      <form className="form-control" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <input className="form-control"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter a new task"
            />
          </div>
          <div className="col-md-6">
            <button className="btn btn-primary" type="submit">Add Task</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
