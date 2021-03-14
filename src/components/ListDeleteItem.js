import Button from "./Button";

const ListDeleteItem = ({ name, setStatus, deleteItem }) => {
  return (
    <form
      onSubmit={() => {
        setStatus("view");
        deleteItem(name);
      }}
    >
      <div className="buttons-group">
        <Button name="cancel" type="button" onClick={() => setStatus("view")} />
      </div>
      <div className="ellipsis-wrapper">
        <Button name="delete" type="submit" />
        {name}
      </div>
    </form>
  );
};

export default ListDeleteItem;
