import {
  selectVisibilityFilter,
  visibilityFilterSet,
  type VisibilityFilter,
} from "./todosSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";

export function TodoFilter() {
  const dispatch = useAppDispatch();
  const visibilityFilter = useAppSelector(selectVisibilityFilter);

  function handleFilterClick(filter: VisibilityFilter) {
    dispatch(visibilityFilterSet(filter));
  }

  return (
    <div
      style={{
        display: "flex",
        gap: 8,
      }}
    >
      <button
        onClick={() => handleFilterClick("ALL")}
        style={{ fontWeight: visibilityFilter === "ALL" ? "bold" : "normal" }}
      >
        All
      </button>
      <button
        onClick={() => handleFilterClick("COMPLETED")}
        style={{
          fontWeight: visibilityFilter === "COMPLETED" ? "bold" : "normal",
        }}
      >
        Completed
      </button>
    </div>
  );
}
