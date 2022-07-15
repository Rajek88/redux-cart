export const incItem = (item) => {
  return {
    type: "INCREMENT_ITEM",
    payload: item,
  };
};
export const decItem = (item) => {
  return {
    type: "DECREMENT_ITEM",
    payload: item,
  };
};
