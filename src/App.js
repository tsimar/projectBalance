import "./App.css";
import { AddListItem } from "./component/content/AddContent";
import { InMoneyList } from "./component/list/InMoneyList";
import { OutMoneyList } from "./component/list/OutMoneyList";
import { Navbar } from "./component/navbar/Navbar";
import { useSelector } from "react-redux";
import { strings } from "./strings/strings";

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
          <AddListItem titleName={strings.dochody} />
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
          <AddListItem titleName={strings.wydatki} />
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
