import { IFilters } from "@/types/Filters";
import { IProductState } from "@/types/Products";
import { ISorts } from "@/types/Sorts";

export type IProduct = {
  products: IProductState | [];
  filters: IFilters[] | [];
  sorts: ISorts[] | [];
};

export const initialState: IProduct = {
  products: [],
  filters: [],
  sorts: [],
};
