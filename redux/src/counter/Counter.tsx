import { useAppDispatch, useAppSelector } from "../app/hooks";
import { decremented, incremented, reset } from "./counterSlice";

export function Counter() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h1 style={{ fontSize: 24 }}>Counter</h1>
      <div style={{ fontSize: 24 }}>{count}</div>
      <button onClick={() => dispatch(incremented())}>Increment</button>
      <button onClick={() => dispatch(decremented())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}

// Local example with useReducer
//
// function counterReducer(
//   count: number,
//   action: { type: "incremented" | "decremented" | "reset" }
// ) {
//   switch (action.type) {
//     case "incremented":
//       return count + 1;
//     case "decremented":
//       return count - 1;
//     case "reset":
//       return 0;
//     default:
//       return count;
//   }
// }

// export function Counter() {
//   const [count, dispatch] = useReducer(counterReducer, 0);

//   return (
//     <div>
//       <h1 style={{ fontSize: 24 }}>Counter</h1>
//       <div style={{ fontSize: 24 }}>{count}</div>
//       <button onClick={() => dispatch({ type: "incremented" })}>
//         Increment
//       </button>
//       <button onClick={() => dispatch({ type: "decremented" })}>
//         Decrement
//       </button>
//       <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
//     </div>
//   );
// }
