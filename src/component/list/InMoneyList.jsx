import React from "react";
import { useSelector } from "react-redux";
import InMoneyItem from "../items/MoneyItem";

export const InMoneyList = () => {
  const addNameAndMoney = useSelector((state) => state.inMoney.todos);

  return (
    <ul>
      {addNameAndMoney.map((item) => (
        <InMoneyItem key={item.id} item={item} />
      ))}
    </ul>
  );
};
