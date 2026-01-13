import { useMemo, useState } from "react";
import "./App.css";
import { useWindowSize } from "./useWindowSize";
import { FormUsingHook } from "./FormUsingHook";

function fibonacci(n: number): number {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function FibonacciWithMemo() {
  const result = useMemo(() => fibonacci(35), []);

  return <div>Result: {result}</div>;
}

function Fibonacci() {
  const result = fibonacci(35);

  return <div>Result: {result}</div>;
}

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 style={{ fontSize: 24 }}>Counter</h1>
      <div style={{ fontSize: 24 }}>{count}</div>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
      <button onClick={() => setCount((count) => count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

function SimpleForm({ lowPerf }: { lowPerf: boolean }) {
  const [username, setUsername] = useState("");
  const [submittedName, setSubmittedName] = useState("");
  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setSubmittedName(username);
  }
  return (
    <div>
      <h1 style={{ fontSize: 24 }}>Form</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", gap: 8 }}>
        <label style={{ display: "inline-flex", gap: 4 }}>
          Username:
          <input
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <input type="submit" />
      </form>
      {submittedName ? (
        <div style={{ margin: 16 }}>Submitted username: {submittedName}</div>
      ) : null}

      <Separator />
      <h1 style={{ fontSize: 24 }}>Expensive component</h1>
      {lowPerf ? <Fibonacci /> : <FibonacciWithMemo />}
    </div>
  );
}

function WindowSizeDisplay() {
  const { width, height } = useWindowSize();

  return (
    <div>
      <h1 style={{ fontSize: 24 }}> Window Size</h1>
      <p>Width: {width}</p>
      <p>Height: {height}</p>
    </div>
  );
}

function Separator() {
  return <hr style={{ margin: 24 }} />;
}

function App() {
  return (
    <div>
      <Counter />

      <Separator />

      <SimpleForm lowPerf={true} />

      <Separator />

      <WindowSizeDisplay />

      <Separator />

      <div>
        <h1 style={{ fontSize: 24 }}>Form with custom useForm hook</h1>
        <FormUsingHook />
      </div>
    </div>
  );
}

export default App;
