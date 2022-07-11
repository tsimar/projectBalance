import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const outMoneySlice = createSlice({
  name: "outMoney",
  initialState: { todos: [] },
  reducers: {
    addOutMoney: (state, action) => {
      const addOutNameMoney = {
        id: uuidv4(),
        title: action.payload.title,
        content: action.payload.content,
        idMoney: action.payload.idMoney,
      };

      state.todos.push(addOutNameMoney);
    },
    removeOutMoney: (state, action) => {
      const { id } = action.payload;
      state.todos = state.todos.filter((item) => item.id !== id);
    },
    updateOutMoney: (state, action) => {
      state.todos.map((item) => {
        if (item.id === action.payload.id) {
          item.title = action.payload.title;
          item.content = action.payload.content;
        }
      });
    },
  },
});

export const { addOutMoney, removeOutMoney, updateOutMoney } =
  outMoneySlice.actions;

export default outMoneySlice.reducer;
