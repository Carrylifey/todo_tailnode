import { useEffect, useState } from "react";
import Logo from "./Logo";
import { Form } from "./Form";
import { TodoList } from "./TodoList";
import { Stats } from "./Stats";

function App() {
  const storedItems = JSON.parse(localStorage.getItem("todoItems")) || [];
  const [items, setItems] = useState(storedItems);
  useEffect(() => {
    localStorage.setItem("todoItems", JSON.stringify(items));
  }, [items]);

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
    console.log(items);
  }

  function handleDeleteItm(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  }

  function handleClearList() {
    const confirm = window.confirm(
      "Are you Sure you want to delete all the things from the list"
    );
    if (confirm) setItems([]);
  }
  return (
    <div className="app">
      <Logo onClickClear={handleClearList} />
      <Form onAddItems={handleAddItem} />
      <TodoList
        items={items}
        onDeleteItem={handleDeleteItm}
        onToggleItem={handleToggleItem}
      />
      <Stats items={items} />
    </div>
  );
}
export function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.done}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={item.done ? { textDecoration: "line-through" } : null}>
        {item.quantity}&nbsp;
        {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)} className="cross">
        ✖
      </button>
    </li>
  );
}

export default App;
