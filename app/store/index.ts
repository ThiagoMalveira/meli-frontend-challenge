import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { search } from "./search/slice";

const reducers = combineReducers({
  search,
});

export const store = configureStore({
  reducer: reducers,
});

export { reducers };
