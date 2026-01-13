import { useMemo, useState } from "react";
import "./App.css";
import { MyForm } from "./customs";

function App() {
  const [count, setCount] = useState(0);

  const [username, setUsername] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setSubmittedName(username);
  }

  return (
    <div>
      <h1 style={{ fontSize: 24 }}>Counter</h1>
      <div style={{ fontSize: 24 }}>{count}</div>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
      <button onClick={() => setCount((count) => count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>

      <hr style={{ margin: 24 }} />

      <h1 style={{ fontSize: 24 }}>Expensive component</h1>
      <Expensive />

      <hr style={{ margin: 24 }} />

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

      <hr style={{ margin: 24 }} />

      {/* <div>
        <h1 style={{ fontSize: 24 }}>Form with custom useForm hook</h1>
        <MyForm />
      </div> */}
    </div>
  );
}

function fibonacci(n: number): number {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function Expensive() {
  const result = useMemo(() => fibonacci(35), []);

  return <div>Result: {result}</div>;
}

export default App;

function useFetch(url: string) {
  useEffect(() => {});

  return {
    isLoading,
    error,
    data,
  };
}

function MyComp() {
  const { isLoading, error, data } = useFetch("myapi.com/posts");

  if (isLoading) {
    return <div>Loader</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
  return <div>{data}</div>;
}
