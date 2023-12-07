/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { Context } from "../context/GlobalContext";
import TransactionLi from "./TransactionLi";

export default function TransactionList() {
  const {
    state: { transaction },
  } = useContext(Context);

  return (
    <>
      <h3>History</h3>
      <ul>
        {transaction.map((list) => (
          <TransactionLi key={list.id} list={list} />
        ))}
      </ul>
    </>
  );
}
