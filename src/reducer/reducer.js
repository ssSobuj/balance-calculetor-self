export const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD-TRANSACTION":
      return {
        ...state,
        transaction: [...state.transaction, payload],
      };
    case "DELET_LIST":
      return {
        ...state,
        transaction: state.transaction.filter((list) => list.id !== payload),
      };

    default:
      return state;
  }
};
