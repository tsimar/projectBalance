import React, { useState } from "react";

import "../../style/style.css";
import { useDispatch } from "react-redux";
import { addInMoney } from "../../slice/items/inMoneySlice";
import { addOutMoney } from "../../slice/items/outMoneySlice";
import { incrementIn } from "../../slice/contentTotal/totalinMoneySlice";
import { incrementOut } from "../../slice/contentTotal/totalOutMoneySlice";
import { strings } from "../../strings/strings";

export const AddListItem = ({ titleName }) => {
  const dispatch = useDispatch();
  const [inMoney, setInMoney] = useState("");
  const [inNameMoney, setInNameMoney] = useState("");

  const handleSubmitInMoney = (e) => {
    e.preventDefault();

    if (inMoney && titleName === strings.dochody) {
      dispatch(
        addInMoney({ title: inNameMoney, content: inMoney, idMoney: titleName })
      );
      dispatch(incrementIn(parseFloat(inMoney).toFixed(2)));
    } else {
      dispatch(
        addOutMoney({
          title: inNameMoney,
          content: inMoney,
          idMoney: titleName,
        })
      );
      dispatch(incrementOut(parseFloat(inMoney).toFixed(2)));
    }

    setInMoney("");
    setInNameMoney("");
  };

  return (
    <form className="heard-in" onSubmit={handleSubmitInMoney}>
      <h2 className="heard-h2">
        {titleName} <img className="img-in" src="/img/profits.png" alt="" />
      </h2>
      <input
        className="inp-name"
        type="text"
        placeholder="nazwa płatności"
        required
        value={inNameMoney}
        onChange={(e) => setInNameMoney(e.target.value)}
      />
      <input
        className="inp-money"
        type="number"
        min="1"
        step="0.01"
        name="money-in"
        placeholder="0.00 zl"
        required
        value={inMoney}
        onChange={(e) => setInMoney(e.target.value)}
      />
      <button type="submit" className="btn-add"></button>
    </form>
  );
};
