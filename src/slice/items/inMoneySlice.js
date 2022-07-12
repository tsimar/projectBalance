import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const inMoneySlice = createSlice({
  name: "inMoney",
  initialState: { todos: [] },
  reducers: {
    addInMoney: (state, action) => {
      const addInNameMoney = {
        id: uuidv4(),
        title: action.payload.title,
        content: action.payload.content,
        idMoney: action.payload.idMoney,
      };

      state.todos.push(addInNameMoney);
    },
    removeInMoney: (state, action) => {
      const { id } = action.payload;
      state.todos = state.todos.filter((item) => item.id !== id);
    },
    updateInMoney: (state, action) => {
      state.todos.forEach((item) => {
        if (item.id === action.payload.id) {
          item.title = action.payload.title;
          item.content = action.payload.content;
        }
      });
    },
  },
});

export const { addInMoney, removeInMoney, updateInMoney } =
  inMoneySlice.actions;

export default inMoneySlice.reducer;
