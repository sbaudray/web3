import { Provider } from "react-redux";
import "./App.css";
import { Counter } from "./counter/Counter";
import { AddTodo } from "./todos/TodoAdd";
import { TodoFilter } from "./todos/TodoFilter";
import { TodoList } from "./todos/TodoList";
import { Separator } from "./ui/Separator";
import { store } from "./app/store";

function App() {
  return (
    <Provider store={store}>
      <h2 style={{ fontSize: 24 }}>Counter</h2>
      <Counter />

      <Separator />

      <h2 style={{ fontSize: 24 }}>Todo Redux</h2>
      <div style={{ display: "grid", gap: 16 }}>
        <AddTodo />
        <TodoFilter />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
