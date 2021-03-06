import { useState } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState("");

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={() => {
          if (input !== "") {
            props.addTodo(input);
            setInput("");
          }
        }}
      >
        +
      </button>
    </div>
  );
};

export default TodoForm;
