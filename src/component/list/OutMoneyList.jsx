import React from "react";
import { useSelector } from "react-redux";
import InMoneyItem from "../items/MoneyItem";

export const OutMoneyList = () => {
  const addNameAndMoney = useSelector((state) => state.outMoney.todos);

  return (
    <ul>
      {addNameAndMoney.map((item) => (
        <InMoneyItem key={item.id} item={item} />
      ))}
    </ul>
  );
};
