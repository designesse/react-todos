import { useState } from "react";
import "./FormListItem.css";

const FormListItem = (props) => {
  const [input, setInput] = useState("");

  return (
    <form
      className="FormListItem"
      onSubmit={() => {
        if (input !== "") {
          props.addItem(input);
        }
      }}
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={`Enter a ${props.typeSingular}`}
        required
      />
      <button type="submit">+</button>
    </form>
  );
};

export default FormListItem;
