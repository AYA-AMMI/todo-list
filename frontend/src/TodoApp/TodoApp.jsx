import React, { useState, useEffect } from "react";
import "./TodoApp.css";
import { RiDeleteBin5Line } from "react-icons/ri";

const API_URL = "http://localhost:3000";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // CHarge the Tasks
  useEffect(() => {
    fetch(`${API_URL}/tasks`)
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((err) => console.error(err));
  }, []);

  // add a Task
  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    fetch(`${API_URL}/tasks`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description }),
    })
      .then((res) => res.json())
      .then((data) => {
        setTodos([data.task, ...todos]);
        setTitle("");
        setDescription("");
      })
      .catch((err) => console.error(err));
  };

  const toggleComplete = (id, currentStatus) => {
    fetch(`${API_URL}/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: !currentStatus }),
    })
      .then((res) => res.json())
      .then((data) => {
        setTodos(todos.map((todo) => (todo._id === id ? data.task : todo)));
      })
      .catch((err) => console.error(err));
  };

  // delete  task:
  const handleDelete = (id) => {
    fetch(`${API_URL}/tasks/${id}`, { method: "DELETE" })
      .then(() => setTodos(todos.filter((todo) => todo._id !== id)))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <div className="todo-container">
        <h1>To-Do List</h1>

        <form onSubmit={handleAddTodo}>
          <input
            type="text"
            placeholder="Enter the task title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Description (optional)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button type="submit">Add</button>
        </form>

        <ul className="todo-list">
          {todos.map((todo) => (
            <li key={todo._id} className={todo.completed ? "completed" : ""}>
              <span onClick={() => toggleComplete(todo._id, todo.completed)}>
                {todo.title}
              </span>
              {todo.description && <p>{todo.description}</p>}
              <button onClick={() => handleDelete(todo._id)}>
                <RiDeleteBin5Line />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoApp;
