import { useState, useEffect } from "react";
import FormListItem from "./FormListItem";
import ListItem from "./ListItem";
import Button from "./Button";
import "./List.css";

const List = (props) => {
  const [items, setItems] = useState([]);
  const [lastId, setLastId] = useState(0);

  useEffect(() => {
    setItems(
      localStorage.getItem(props.type)
        ? JSON.parse(localStorage.getItem(props.type))
        : []
    );
    setLastId(
      localStorage.getItem(props.lastId)
        ? localStorage.getItem(props.lastId)
        : 0
    );
  }, [props.type, props.lastId]);

  useEffect(() => {
    localStorage.setItem(props.type, JSON.stringify(items));
    localStorage.setItem(props.lastId, lastId);
  }, [props.type, props.lastId, items, lastId]);

  const addItem = (input) => {
    const newItems = [...items, { id: lastId, name: input }];
    setLastId(lastId + 1);
    setItems(newItems);
  };

  const deleteItem = (input) => {
    const iItem = items.findIndex((el) => el.name === input);
    const newItems = [...items];
    newItems.splice(iItem, 1);
    setItems(newItems);
  };

  const updateItem = (inputSaved, inputNew) => {
    const iItem = items.findIndex((el) => el.name === inputSaved);
    const newItems = [...items];
    newItems[iItem].name = inputNew;
    setItems(newItems);
  };

  return (
    <div className="List">
      <ul>
        {items &&
          items.map((todo) => (
            <li key={todo.id}>
              <ListItem
                name={todo.name}
                deleteItem={deleteItem}
                updateItem={updateItem}
              />
            </li>
          ))}
      </ul>
      <FormListItem addItem={addItem} typeSingular={props.typeSingular} />
      {items.length > 0 && (
        <div className="right">
          <Button
            name={`Delete all ${props.typePlural}`}
            type="submit"
            onClick={() => setItems([])}
          />
        </div>
      )}
    </div>
  );
};

export default List;
