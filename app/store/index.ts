import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from "./product/slice";

const reducer = combineReducers({
  products: productReducer,
});

export const store = configureStore({
  reducer,
});

export { reducer };
