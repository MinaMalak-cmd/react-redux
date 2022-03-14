import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
  show: true,
};
const counterSlice = createSlice({
  name: "Counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    incrementByValue(state, action) {
      state.counter += action.payload;
    },
    toggle(state) {
      state.show = !state.show;
    },
  },
});

const store = configureStore({ reducer: { counter: counterSlice.reducer } });
export const Actions = counterSlice.actions;
export  default store;
