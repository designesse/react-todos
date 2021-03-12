import { useState, useEffect } from "react";
import FormListItem from "./FormListItem";
import ListItem from "./ListItem";
import "./List.css";

const List = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(
      localStorage.getItem(props.type)
        ? JSON.parse(localStorage.getItem(props.type))
        : []
    );
  }, []);

  useEffect(() => {
    localStorage.setItem(props.type, JSON.stringify(items));
  }, [items]);

  const addItem = (input) => {
    const newItems = [...items, { name: input }];
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
            <li key={todo.name}>
              <ListItem
                name={todo.name}
                deleteItem={deleteItem}
                updateItem={updateItem}
              />
            </li>
          ))}
      </ul>
      <FormListItem addItem={addItem} typeSingular={props.typeSingular} />
      <button className="right" onClick={() => setItems([])}>
        Delete all {props.typePlural}
      </button>
    </div>
  );
};

export default List;
