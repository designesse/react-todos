const ListViewItem = ({ name, setStatus }) => {
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

export default ListViewItem;
