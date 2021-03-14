import Button from "./Button";

const ListViewItem = ({ name, setStatus }) => {
  return (
    <div>
      <div className="buttons-group">
        <Button name="edit" type="button" onClick={() => setStatus("edit")} />
        <Button
          name="delete"
          type="button"
          onClick={() => setStatus("delete")}
        />
      </div>
      <div className="ellipsis-wrapper">
        <div className="ellipsis-text">{name}</div>
      </div>
    </div>
  );
};

export default ListViewItem;
