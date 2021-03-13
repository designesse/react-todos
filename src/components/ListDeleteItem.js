const ListDeleteItem = ({ name, setStatus, deleteItem }) => {
  return (
    <form
      onSubmit={() => {
        setStatus("view");
        deleteItem(name);
      }}
    >
      <div className="buttons-group">
        <button onClick={() => setStatus("view")}>cancel</button>
      </div>
      <div className="ellipsis-wrapper">
        <button type="submit">delete</button>
        {name}
      </div>
    </form>
  );
};

export default ListDeleteItem;
