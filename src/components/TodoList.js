import { Item } from "./App";

export function TodoList({ items, onDeleteItem, onToggleItem }) {
  const sortedItems = items.sort((a, b) =>
    b.done ? b.completedTimestamp - a.completedTimestamp : b.id - a.id
  );

  const activeItems = sortedItems.filter((item) => !item.done);
  const completedItems = sortedItems.filter((item) => item.done);

  return (
    <div className="list">
      <div className="active-tasks">
        <h2>Active Tasks</h2>
        <ul>
          {activeItems.map((item) => (
            <Item
              key={item.id}
              item={item}
              onDeleteItem={onDeleteItem}
              onToggleItem={onToggleItem}
            />
          ))}
        </ul>
      </div>
      <div className="completed-tasks">
        <h2>Completed Tasks</h2>
        <ul>
          {completedItems.map((item) => (
            <Item
              key={item.id}
              item={item}
              onDeleteItem={onDeleteItem}
              onToggleItem={onToggleItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
