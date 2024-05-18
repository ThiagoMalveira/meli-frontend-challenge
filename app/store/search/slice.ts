import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ISearchState, initialState, nameState } from "./types";

const searchSlice = createSlice({
  name: nameState,
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
