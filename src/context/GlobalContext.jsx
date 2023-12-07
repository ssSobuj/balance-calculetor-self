/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import { reducer } from "../reducer/reducer";
import { initialValue } from './../reducer/initialValue';

export const Context = createContext(null);

export default function GlobalContext({ children }) {
  const [ state, dispatch ] = useReducer(reducer, initialValue);

  const value = {
    state,
    dispatch,
  };


  return <Context.Provider value={value}>{children}</Context.Provider>;
}
