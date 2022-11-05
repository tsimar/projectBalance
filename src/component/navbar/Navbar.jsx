import React from "react";
import { useSelector } from "react-redux";
import logo from "../../img/icons8-budget-64.png";

export const Navbar = () => {
  const totalInMoney = useSelector((state) => state.totalIn.todos);
  const totalOutMoney = useSelector((state) => state.totalOut.todos);

  let balance = parseFloat(totalInMoney, 2) - parseFloat(totalOutMoney, 2);
  balance = parseFloat(balance, 2);
  
  return (
    <>
      <div className="logotype ">
        <img className="img-logo" src={logo} alt="logo" />
      </div>
      <p className="balance">
        {balance < 0
          ? `Wasz bilans przebił podlogę: ${balance} zł`
          : `Mozesz jeszcze wydać: ${balance} zł`}
      </p>
    </>
  );
};
