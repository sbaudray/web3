import { useState } from "react";
import { Separator } from "./Separator";
import { Fibonacci, FibonacciWithMemo } from "./Fibonacci_useMemo_example";

export function SimpleForm({ lowPerf }: { lowPerf: boolean }) {
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
