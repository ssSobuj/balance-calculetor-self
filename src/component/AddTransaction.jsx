import { useContext } from "react";
import { Context } from "../context/GlobalContext";

export default function AddTransaction() {
  const { dispatch } = useContext(Context);

  const fromHandler = (e) => {
    e.preventDefault();
    const elements = [...e.target.elements];
    const listValu = { id: Date.now(), isIdit: false };

    elements.forEach((element) => {
      listValu[element.name] = element.value;
    });
    dispatch({ type: "ADD-TRANSACTION", payload: listValu });
  };

  return (
    <>
      {" "}
      <h2>Add New Transaction</h2>
      <form onSubmit={fromHandler}>
        <label>Text</label>
        <input type="text" name="text" />
        <br />
        <label>Amount</label>
        <input type="number" name="amount" />
        <button type="submit">submit</button>
      </form>
    </>
  );
}
