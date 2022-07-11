// import { useState } from "react";
import "./App.css";
import { Dochody } from "./component/content/AddContent";
import { InMoneyList } from "./component/list/InMoneyList";
import { OutMoneyList } from "./component/list/OutMoneyList";
import { Navbar } from "./component/navbar/Navbar";
import { useSelector } from "react-redux";

import "./style/style.css";

function App() {
  const totalInMoney = useSelector((state) => state.totalIn.todos);
  const totalOutMoney = useSelector((state) => state.totalOut.todos);

  return (
    <div className="size-body">
      <Navbar />
      <hr className="nav-hr" />
      <div className="entries-wrapper">
        <section className="section_in-money ">
          <Dochody titleName="DOCHODY" />
          <hr />
          <div className="footer-in">
            <p>
              &Sigma; przychodów{" "}
              <span className="total-in"> {totalInMoney}</span> zł
            </p>
          </div>
          <InMoneyList />
        </section>
        <section className="section_out-money">
          <Dochody titleName="WYDATKI" />
          <hr />
          <div className="footer-out">
            <p>
              &Sigma; wydatków{" "}
              <span className="total-out"> {totalOutMoney}</span> zł
            </p>
          </div>
          <OutMoneyList />
        </section>
      </div>
    </div>
  );
}

export default App;
