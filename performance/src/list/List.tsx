import { useState, useMemo } from "react";
import { ListItem } from "./ListItem";

interface Item {
  id: number;
  value: number;
}

export function List() {
  const [items, setItems] = useState<Item[]>([
    { id: 1, value: 5 },
    { id: 2, value: 15 },
    { id: 3, value: 8 },
    { id: 4, value: 20 },
  ]);

  const countOfValuesHigherThan10 = useMemo(() => {
    return items.filter((item) => item.value > 10).length;
  }, [items]);

  function addItem() {
    const newItem = { id: Date.now(), value: Math.floor(Math.random() * 20) };

    setItems((items) => [...items, newItem]);
  }

  return (
    <div style={{ display: "grid", padding: 16 }}>
      <h1>List</h1>
      <p>Items greater than 10: {countOfValuesHigherThan10}</p>
      <button onClick={addItem} style={{ padding: 8, marginBottom: 8 }}>
        Add random number
      </button>
      <div style={{ display: "grid", gap: 8 }}>
        {items.map((item) => (
          <ListItem key={item.id} value={item.value} />
        ))}
      </div>
    </div>
  );
}
