import { Provider } from "react-redux";
import "./App.css";
import { Counter } from "./counter/Counter";
import { store } from "./app/store";
import { AddTodo } from "./todos/TodoAdd";
import { TodoFilter } from "./todos/TodoFilter";
import { TodoList } from "./todos/TodoList";

function App() {
  return (
    <Provider store={store}>
      <Counter />

      <h2 style={{ fontSize: 24 }}>Todo Redux</h2>
      <AddTodo />
      <TodoFilter />
      <TodoList />
    </Provider>
  );
}

export default App;
