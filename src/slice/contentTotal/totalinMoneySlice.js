import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: 0,
};

export const totalinMoneySlice = createSlice({
  name: "totalSpaceMoney",
  initialState,
  reducers: {
    incrementIn: (state, action) => {
      state.todos += action.payload;
    },
    decrementIn: (state, action) => {
      state.todos -= action.payload;
    },
  },
});

export const { incrementIn, decrementIn } = totalinMoneySlice.actions;

export default totalinMoneySlice.reducer;
