import { useState } from "react";
import "./App.css";

const Tasks = [];

export default function App() {
  const [newTask, setNewTask] = useState("");
  const [allTask, setAllTask] = useState(Tasks);

  function handleNewTask() {
    const newTasksArry = [...allTask, newTask];
    setAllTask(newTasksArry);
    setNewTask("");
  }

  function handleDeleteTask(index) {
    const updatedTasks = allTask.filter((_, i) => i !== index);
    setAllTask(updatedTasks);
  }

  function handleReset() {
    setAllTask(Tasks);
    setNewTask("");
  }
  return (
    <div className="App">
      <h1>To-Do-App</h1>
      <AddTask
        newTask={newTask}
        setNewTask={setNewTask}
        onAdd={handleNewTask}
      />
      <ShowTasks onAddTask={allTask} onDeleteTask={handleDeleteTask} />
      <Reset onReset={handleReset} allTask={allTask} />
    </div>
  );
}

function AddTask({ newTask, setNewTask, onAdd }) {
  return (
    <div>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={onAdd}>Add Task</button>
    </div>
  );
}

function ShowTasks({ onAddTask, onDeleteTask }) {
  return (
    <ul>
      {onAddTask.map((task, index) => (
        <li key={index}>
          {task}
          <button onClick={() => onDeleteTask(index)}>X</button>
        </li>
      ))}
    </ul>
  );
}

function Reset({ onReset, allTask }) {
  return (
    <>
      <div className="line"></div>
      {allTask.length < 1 ? null : (
        <button onClick={onReset} className="resetbtn">
          Remove All
        </button>
      )}
    </>
  );
}
