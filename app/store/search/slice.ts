import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ISearchState, initialState } from "./types";

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    search(state, action: PayloadAction<ISearchState>) {
      return {
        ...state,
        products: action.payload,
      };
    },
  },
});

export const { search } = searchSlice.actions;

export default searchSlice.reducer;
