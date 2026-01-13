import { useMemo } from "react";

function fibonacci(n: number): number {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

export function FibonacciWithMemo() {
  const result = useMemo(() => fibonacci(35), []);

  return <div>Result: {result}</div>;
}

export function Fibonacci() {
  const result = fibonacci(35);

  return <div>Result: {result}</div>;
}
