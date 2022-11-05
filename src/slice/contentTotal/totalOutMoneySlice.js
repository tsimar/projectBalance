import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: 0,
};

export const totalOutMoneySlice = createSlice({
  name: "totalSpaceOutMoney",
  initialState,
  reducers: {
    incrementOut: (state, action) => {
      const money = parseFloat(action.payload, 2);
      state.todos += money;
    },
    decrementOut: (state, action) => {
      const money = parseFloat(action.payload, 2);
      state.todos -= money;
    },
  },
});

export const { incrementOut, decrementOut } = totalOutMoneySlice.actions;

export default totalOutMoneySlice.reducer;
