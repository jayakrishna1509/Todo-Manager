import React, { useState, useRef, useEffect, useMemo } from "react";
import useTodos from "./useTodo";
import "./style.css";

const TodoApp = () => {
  const { todos, addTodo, toggleTodo, removeTodo } = useTodos();
  const [newToDo, setNewTodo] = useState("");
  const [filter, setFilter] = useState("all");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const filteredTodos = useMemo(() => {
    return todos.filter((todo) => {
      if (filter === "completed") return todo.completed;
      if (filter === "pending") return !todo.completed;
      return true;
    });
  }, [filter, todos]);

  const completedCount = useMemo(() => todos.filter((todo) => todo.completed).length, [todos]);
  const pendingCount = useMemo(() => todos.filter((todo) => !todo.completed).length, [todos]);

  return (
    <div className="todo-container">
      <h1 className="todo-heading">Todo Manager</h1>
      
      <div className="filter-buttons">
        <button 
          className={`filter-btn ${filter === "all" ? "active" : ""}`}
          onClick={() => setFilter("all")}
        >
          All: {todos.length}
        </button>
        <button 
          className={`filter-btn ${filter === "completed" ? "active" : ""}`}
          onClick={() => setFilter("completed")}
        >
          Completed: {completedCount}
        </button>
        <button 
          className={`filter-btn ${filter === "pending" ? "active" : ""}`}
          onClick={() => setFilter("pending")}
        >
          Pending: {pendingCount}
        </button>
      </div>

      <div className="input-container">
        <input
          type="text"
          placeholder="Add a New Todo"
          value={newToDo}
          onChange={(e) => setNewTodo(e.target.value)}
          ref={inputRef}
          onKeyPress={(e) => e.key === 'Enter' && addTodo(newToDo, setNewTodo)}
        />
        <button className="add-btn" onClick={() => addTodo(newToDo, setNewTodo)}>Add TODO</button>
      </div>

      <ol className="todos-list">
        {filteredTodos.map((todo, index) => (
          <div key={todo.id} className="todo-item">
            <li
              className={`todo-title ${todo.completed ? "completed" : ""}`}
            >
              {index + 1}. {todo.title}
            </li>
            <div className="todo-actions">
              <button 
                className="action-btn toggle-btn"
                onClick={() => toggleTodo(todo.id)}
              >
                {todo.completed ? "Undo" : "Complete"}
              </button>
              <button 
                className="action-btn remove-btn"
                onClick={() => removeTodo(todo.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </ol>
    </div>
  );
};

export default TodoApp;