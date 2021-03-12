import { useState } from "react";

const ListItem = (props) => {
  const [nameSaved, setNameSaved] = useState(props.name);
  const [name, setName] = useState(props.name);
  const [status, setStatus] = useState(null);

  const renderItem = () => {
    if (status === "edit") {
      return (
        <form
          onSubmit={() => {
            if (name !== "") {
              setStatus(null);
              props.updateItem(nameSaved, name);
              setNameSaved(name);
            }
          }}
        >
          <div className="buttons-group">
            <button type="submit">update</button>
            <button
              onClick={() => {
                setStatus(null);
                setName(nameSaved);
              }}
            >
              cancel
            </button>
          </div>
          <div className="input-wrapper">
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              value={name}
              required
            />
          </div>
        </form>
      );
    }
    if (status === "delete") {
      return (
        <form
          onSubmit={() => {
            setStatus(null);
            props.deleteItem(props.name);
          }}
        >
          <div className="buttons-group">
            <button onClick={() => setStatus(null)}>cancel</button>
          </div>
          <div className="ellipsis-wrapper">
            <button type="submit">delete</button>
            {name}
          </div>
        </form>
      );
    }
    return (
      <div>
        <div className="buttons-group">
          <button onClick={() => setStatus("edit")}>edit</button>
          <button onClick={() => setStatus("delete")}>delete</button>
        </div>
        <div className="ellipsis-wrapper">
          <div className="ellipsis-text">{name}</div>
        </div>
      </div>
    );
  };

  return <>{renderItem()}</>;
};

export default ListItem;
