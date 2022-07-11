import { configureStore } from "@reduxjs/toolkit";
import allMoneySlice from "../slice/allMoneySplice";
import inMoneySlice from "../slice/items/inMoneySlice";
import outMoneySlice from "../slice/items/outMoneySlice";
import totalinMoneySlice from "../slice/contentTotal/totalinMoneySlice";
import totalOutMoneySlice from "../slice/contentTotal/totalOutMoneySlice";

export default configureStore({
  reducer: {
    inMoney: inMoneySlice,
    outMoney: outMoneySlice,
    totalIn: totalinMoneySlice,
    totalOut: totalOutMoneySlice,
    allMoney: allMoneySlice,
  },
});
