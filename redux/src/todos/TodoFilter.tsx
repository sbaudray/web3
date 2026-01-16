import {
  selectVisibilityFilter,
  visibilityFilterSet,
  type VisibilityFilter,
} from "./todosSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";

export function TodoFilter() {
  const dispatch = useAppDispatch();
  const currentFilter = useAppSelector(selectVisibilityFilter);

  const containerStyle = {
    display: "flex",
    gap: "10px",
    padding: "10px 0",
  };

  function handleFilterClick(filter: VisibilityFilter) {
    dispatch(visibilityFilterSet(filter));
  }

  return (
    <div style={containerStyle}>
      <button
        onClick={function () {
          handleFilterClick("ALL");
        }}
        style={{ fontWeight: currentFilter === "ALL" ? "bold" : "normal" }}
      >
        All
      </button>
      <button
        onClick={function () {
          handleFilterClick("COMPLETED");
        }}
        style={{
          fontWeight: currentFilter === "COMPLETED" ? "bold" : "normal",
        }}
      >
        Completed
      </button>
    </div>
  );
}
