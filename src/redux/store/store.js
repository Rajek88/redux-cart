import { configureStore } from "@reduxjs/toolkit";
import quantityHandler from "../reducers/quantityHandler";

export const store = configureStore(
  {
    reducer: {
      quantityHandler: quantityHandler,
    },
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
