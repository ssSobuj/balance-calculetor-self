import { useContext } from "react";
import { Context } from "../context/GlobalContext";

export default function IncomeExpens() {
  const {
    state: { transaction },
  } = useContext(Context);

  const income = transaction.reduce((acc, curr) => {
    if (curr.amount > 0) {
       (acc += +curr.amount);
    }
    return acc
  }, 0);
  const expense = transaction.reduce((acc, curr) => {
    if (curr.amount < 1) {
       (acc += +curr.amount);
    }
    return acc
  }, 0);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p>{income} </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p>$ {expense}</p>
      </div>
    </div>
  );
}
