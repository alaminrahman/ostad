import React, { useState } from 'react';
import './App.css'

const TodoListApp = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  const [completedTasks, setCompletedTasks] = useState([]);

  const handleTaskInputChange = (e) => {
    setTaskInput(e.target.value);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (taskInput.trim() !== '') {
      setTasks((prevTasks) => [...prevTasks, taskInput]);
      setTaskInput('');
    }
  };

  const handleDeleteTask = (index) => {
    setTasks((prevTasks) => prevTasks.filter((task, i) => i !== index));
    setCompletedTasks((prevCompletedTasks) =>
      prevCompletedTasks.filter((completed, i) => i !== index)
    );
  };

  const handleTaskClick = (index) => {
    setCompletedTasks((prevCompletedTasks) =>
      prevCompletedTasks.includes(index)
        ? prevCompletedTasks.filter((completed, i) => i !== index)
        : [...prevCompletedTasks, index]
    );
  };

  return (
    <div>
      <h2>Todo List App</h2>
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          value={taskInput}
          onChange={handleTaskInputChange}
          placeholder="Enter a new task"
        />
        <button type="submit">Add Task</button>
      </form>
      <ol>
        {tasks.map((task, index) => (
          <li
            key={index}
            onClick={() => handleTaskClick(index)}
            style={{
              textDecoration: completedTasks.includes(index)
                ? 'line-through'
                : 'none',
            }}
          >
            {task}{' '}
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TodoListApp;
