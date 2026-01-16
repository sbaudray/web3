import {
  createSelector,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import type { AppState } from "../app/store";

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export type VisibilityFilter = "ALL" | "COMPLETED";

interface State {
  items: Todo[];
  ui: {
    visibilityFilter: VisibilityFilter;
  };
}

const initialState: State = {
  items: [],
  ui: {
    visibilityFilter: "ALL",
  },
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    todoAdded: {
      reducer(state, action: PayloadAction<Todo>) {
        state.items.push(action.payload);
      },
      prepare(text: string) {
        return {
          payload: {
            id: crypto.randomUUID(),
            text,
            completed: false,
          },
        };
      },
    },
    todoToggled(state, action: PayloadAction<Todo["id"]>) {
      const todo = state.items.find((item) => item.id === action.payload);

      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    visibilityFilterSet(state, action: PayloadAction<VisibilityFilter>) {
      state.ui.visibilityFilter = action.payload;
    },
  },
});

export const { todoAdded, todoToggled, visibilityFilterSet } =
  todosSlice.actions;

export const selectTodos = (state: AppState) => state.todos.items;
export const selectVisibilityFilter = (state: AppState) =>
  state.todos.ui.visibilityFilter;

export const selectFilteredTodos = createSelector(
  [selectTodos, selectVisibilityFilter],
  (todos, filter) => {
    switch (filter) {
      case "ALL":
        return todos;
      case "COMPLETED":
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  }
);
