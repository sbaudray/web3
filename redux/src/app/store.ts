import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../counter/counterSlice";
import { todosSlice } from "../todos/todosSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    todos: todosSlice.reducer,
  },
});

export type AppStore = typeof store;

export type AppState = ReturnType<AppStore["getState"]>;

export type AppDispatch = AppStore["dispatch"];
