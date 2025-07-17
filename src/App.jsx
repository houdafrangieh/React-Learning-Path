// Basic To-Do List App with React Hooks and Routing (Single Page)

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-center mb-6">To-Do List</h1>
        <Routes>
          <Route path="/" element={<TodoPage />} />
        </Routes>
      </div>
    </Router>
  );
}

function TodoPage() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (!newTask.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: newTask, done: false }]);
    setNewTask('');
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, done: !task.done } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="max-w-xl mx-auto bg-white rounded-xl shadow-md p-6">
      <div className="flex gap-2 mb-4">
        <input
          className="flex-grow border rounded px-3 py-2"
          type="text"
          placeholder="New task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={addTask}
        >
          Add
        </button>
      </div>
      <ul>
        {tasks.length === 0 && (
          <li className="text-gray-500 text-center">No tasks yet.</li>
        )}
        {tasks.map(task => (
          <li
            key={task.id}
            className="flex justify-between items-center border-b py-2"
          >
            <span
              className={`cursor-pointer ${task.done ? 'line-through text-gray-500' : ''}`}
              onClick={() => toggleTask(task.id)}
            >
              {task.text}
            </span>
            <button
              onClick={() => deleteTask(task.id)}
              className="text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;



