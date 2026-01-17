import { selectFilteredTodos, todoToggled } from "./todosSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";

export function TodoList() {
  const dispatch = useAppDispatch();
  const filteredTodos = useAppSelector(selectFilteredTodos);

  return (
    <ul
      style={{
        listStyle: "none",
        padding: 0,
        margin: 0,
        display: "grid",
        gap: 4,
      }}
    >
      {filteredTodos.map((todo) => {
        return (
          <li key={todo.id}>
            <label style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch(todoToggled(todo.id))}
              />
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.text}
              </span>
            </label>
          </li>
        );
      })}
    </ul>
  );
}
