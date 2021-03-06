import List from "./List";

const Todos = () => {
  return (
    <div>
      <h3>Todos</h3>
      <List
        type="todos"
        lastId="todosLastId"
        typePlural="todos"
        typeSingular="todo"
      />
    </div>
  );
};

export default Todos;
