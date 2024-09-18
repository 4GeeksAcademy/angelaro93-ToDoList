import React from "react";
import { useState } from "react";

const ToDoList = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };
  const handleDelete = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };
  return (
    <div className="container mt-5">
      <h1 className="display-1 text-center text-black-50">todos</h1>
      <div className="row justify-content-center mt-4">
        <div className="col-12 col-md-8">
          <div className="shadow p-4 bg-white rounded">
            <div className="input-group mb-4">
              <input
                className="form-control border-light"
                value={task}
                onKeyDown={handleKeyDown}
                type="text"
                placeholder="What needs to be done?"
                onChange={(e) => setTask(e.target.value)}
              />
            </div>
            <ul className="list-group">
              {tasks.map((task, index) => (
                <li
                  key={index}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  {task}
                  <button
                    onClick={() => handleDelete(index)}
                    type="button"
                    className="btn btn-danger btn-sm"
                  >
                    X
                  </button>
                </li>
              ))}
            </ul>
            <div className="row mt-3">
              <div className="col text-start">
                <div className="item">{tasks.length} items left</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
