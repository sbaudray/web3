import { createSlice } from "@reduxjs/toolkit";
import type { AppState } from "../app/store";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    incremented: (state) => {
      state.value += 1;
    },
    decremented: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

export const { incremented, decremented, reset } = counterSlice.actions;

export const selectCounter = (state: AppState) => state.counter.value;
