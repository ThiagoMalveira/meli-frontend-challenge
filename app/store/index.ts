import { combineReducers, configureStore } from "@reduxjs/toolkit";
import searchReducer from "./search/slice";

const reducer = combineReducers({
  search: searchReducer,
});

export const store = configureStore({
  reducer,
});

export { reducer };
