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

// const counter = configureStore({ reducer: { counter: counterSlice.reducer } });
const counterActions = counterSlice.actions;
export{
   counterActions
}
export default counterSlice.reducer;
