import { useState, useEffect } from "react";
import TodoForm from "./TodoForm";

const Todos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos(
      localStorage.getItem("todos")
        ? JSON.parse(localStorage.getItem("todos"))
        : []
    );
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (input) => {
    const newTodos = [...todos, { name: input }];
    setTodos(newTodos);
  };

  return (
    <div className="Todo">
      <ul>
        {todos && todos.map((todo) => <li key={todo.name}>{todo.name}</li>)}
      </ul>
      <TodoForm addTodo={addTodo} />
      <button onClick={() => setTodos([])}>Delete all todos</button>
    </div>
  );
};

export default Todos;
