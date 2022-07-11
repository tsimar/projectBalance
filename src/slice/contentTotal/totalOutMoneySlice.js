import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: 0,
};

export const totalOutMoneySlice = createSlice({
  name: "totalSpaceOutMoney",
  initialState,
  reducers: {
    incrementOut: (state, action) => {
      state.todos += action.payload;
    },
    decrementOut: (state, action) => {
      state.todos -= action.payload;
    },
  },
});

export const { incrementOut, decrementOut } = totalOutMoneySlice.actions;

export default totalOutMoneySlice.reducer;
