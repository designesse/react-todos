import { useState } from "react";

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
        <button type="submit">update</button>
        <button
          onClick={() => {
            setStatus("view");
          }}
        >
          cancel
        </button>
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
