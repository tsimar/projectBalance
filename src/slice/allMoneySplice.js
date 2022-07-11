import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemDelete: 0,
};

export const allMoneySlice = createSlice({
  name: "allMoney",
  initialState,
  reducers: {
    decrementDelete: (state, action) => {
      const money = parseFloat(action.payload);
      if (state.itemDelete < 0) {
        state.itemDelete += money;
      } else {
        state.itemDelete -= money;
      }
    },
  },
});

export const { decrementDelete } = allMoneySlice.actions;

export default allMoneySlice.reducer;
