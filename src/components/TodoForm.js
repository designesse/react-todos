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
            props.addItem(input);
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
