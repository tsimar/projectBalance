import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: 0,
};

export const totalinMoneySlice = createSlice({
  name: "totalSpaceMoney",
  initialState,
  reducers: {
    incrementIn: (state, action) => {
      const money = parseFloat(action.payload, 2);
      state.todos += money;
    },
    decrementIn: (state, action) => {
      const money = parseFloat(action.payload, 2);
      state.todos -= money;
    },
  },
});

export const { incrementIn, decrementIn } = totalinMoneySlice.actions;

export default totalinMoneySlice.reducer;
