import { selectFilteredTodos, todoToggled } from "./todosSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";

export function TodoList() {
  const dispatch = useAppDispatch();
  const filteredTodos = useAppSelector(selectFilteredTodos);

  const listStyle = {
    listStyle: "none",
    padding: 0,
    marginTop: "20px",
  };

  return (
    <ul style={listStyle}>
      {filteredTodos.map(function (todo) {
        return (
          <li
            key={todo.id}
            style={{ padding: "5px 0", borderBottom: "1px solid black" }}
          >
            <label
              style={{ display: "flex", gap: "10px", alignItems: "center" }}
            >
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={function () {
                  dispatch(todoToggled(todo.id));
                }}
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
