import { IFilters, ISorts } from "@/service/product/types";

export type IProductState = {
  id: string;
  title: string;
  price: IPrice;
  installments: IInstallments;
  address: IAddress;
  picture: string;
  condition: string;
  free_shipping: boolean;
};

export type IProduct = {
  products: IProductState | [];
  filters: IFilters[] | [];
  sorts: ISorts[] | [];
};

type IPrice = {
  currency: string;
  amount: string;
  decimals: number;
};

type IInstallments = {
  quantity: number;
  amount: string;
};

type IAddress = {
  state_name: string;
  city_name: string;
};

export type IProductParams = {
  searchTerm: string;
  sort: string;
  price: string;
};

export const initialState: IProduct = {
  products: [],
  filters: [],
  sorts: [],
};
