import { useState } from "react";
import ListEditItem from "./ListEditItem";
import ListDeleteItem from "./ListDeleteItem";
import ListViewItem from "./ListViewItem";

const ListItem = (props) => {
  const [status, setStatus] = useState("view");
  const StatusComponents = Object.freeze({
    view: <ListViewItem name={props.name} setStatus={setStatus} />,
    edit: (
      <ListEditItem
        name={props.name}
        setStatus={setStatus}
        updateItem={props.updateItem}
      />
    ),
    delete: (
      <ListDeleteItem
        name={props.name}
        setStatus={setStatus}
        deleteItem={props.deleteItem}
      />
    ),
  });

  return <>{StatusComponents[status]}</>;
};

export default ListItem;
