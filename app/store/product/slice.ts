import { IFilters } from "@/types/Filters";
import { IProductState } from "@/types/Products";
import { ISorts } from "@/types/Sorts";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialState } from "./types";

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    product(state, action: PayloadAction<IProductState>) {
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

export const { product, sort, filter } = productSlice.actions;

export default productSlice.reducer;
