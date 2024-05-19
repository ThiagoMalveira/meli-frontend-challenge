import { IFilters, ISorts } from "@/service/search/types";
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
    filter(state, action: PayloadAction<IFilters[]>) {
      return {
        ...state,
        filter: action.payload,
      };
    },
    sort(state, action: PayloadAction<ISorts[]>) {
      return {
        ...state,
        sort: action.payload,
      };
    },
  },
});

export const { search, sort, filter } = searchSlice.actions;

export default searchSlice.reducer;
