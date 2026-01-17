import { useState } from "react";
import { todoAdded } from "./todosSlice";
import { useAppDispatch } from "../app/hooks";

export function AddTodo() {
  const [text, setText] = useState("");
  const dispatch = useAppDispatch();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (text.trim()) {
      dispatch(todoAdded(text));
      setText("");
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: 8 }}>
      <input
        value={text}
        onChange={function (e) {
          setText(e.target.value);
        }}
        placeholder="Ex: faire les courses"
      />
      <button type="submit">Add</button>
    </form>
  );
}
