import { useContext } from "react";
import { Context } from "../context/GlobalContext";

export default function Balance() {
  const {
    state: { transaction },
  } = useContext(Context);

  const total = transaction.reduce((acc, curr) => {
    return (acc += +curr.amount);
  }, 0);

  return (
    <div>
      <h4>Your Balance</h4>
      <h1>Total {total}</h1>
    </div>
  );
}
