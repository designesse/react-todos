import { useState } from "react";
import "./FormListItem.css";
import Button from "./Button";

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
      <Button name="+" type="submit" />
    </form>
  );
};

export default FormListItem;
