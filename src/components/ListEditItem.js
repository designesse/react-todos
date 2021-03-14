import { useState } from "react";
import Button from "./Button";

const ListEditItem = ({ name, setStatus, updateItem }) => {
  const [nameInput, setNameInput] = useState(name);

  return (
    <form
      onSubmit={() => {
        if (name !== "") {
          setStatus("view");
          updateItem(name, nameInput);
        }
      }}
    >
      <div className="buttons-group">
        <Button name="update" type="submit" />
        <Button
          name="cancel"
          onClick={() => {
            setStatus("view");
          }}
        />
      </div>
      <div className="input-wrapper">
        <input
          onChange={(e) => setNameInput(e.target.value)}
          type="text"
          value={nameInput}
          required
        />
      </div>
    </form>
  );
};

export default ListEditItem;
