import { IFilters } from "./Filters";
import { ISorts } from "./Sorts";

export type IProductParams = {
  searchTerm: string;
  sort: string;
  price: string;
};

type IPrice = {
  currency: string;
  amount: string;
  decimals: number;
};

type IAddress = {
  state_name: string;
  city_name: string;
};

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

export type ProductOnApi = {
  id: string;
  title: string;
  condition: string;
  thumbnail: string;
  currency_id: string;
  order_backend: number;
  price: number;
  shipping: Shipping;
  installments: IInstallments | null;
};

type Shipping = {
  free_shipping: boolean;
};

export type IInstallments = {
  quantity: number;
  amount: string;
};

export type IProductRepository = {
  search: (queryParams: IProductParams) => Promise<{
    searchResults: IProductState;
    availableSorts: ISorts[];
    availableFilters: IFilters[];
  }>;
};
