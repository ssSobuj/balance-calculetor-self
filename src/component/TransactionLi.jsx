/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useContext } from "react";
import { Context } from "../context/GlobalContext";

export default function TransactionLi({ list }) {
  const { id, amount, text } = list;

  const { dispatch } = useContext(Context);

  const deletList = (id) => {
    dispatch({ type: "DELET_LIST", payload: id });
  };

  return (
    <>
      <li>
        <span>{text}</span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span>{amount}</span>
        <button onClick={() => deletList(id)}>delet</button>
      </li>
    </>
  );
}
