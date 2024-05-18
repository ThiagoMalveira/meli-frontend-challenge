export type ISearchState = {
  id: string;
  title: string;
  price: IPrice;
  installments: IInstallments;
  address: IAddress;
  picture: string;
  condition: string;
  free_shipping: boolean;
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

export type ISearchParams = {
  searchTerm: string;
  sort: string;
  price: string;
};

export const nameState = "search";

export const initialState: ISearchState[] = {
  id: "",
  title: "",
  price: {
    currency: "",
    amount: "",
    decimals: 0,
  },
  installments: {
    quantity: 0,
    amount: "",
  },
  address: {
    state_name: "",
    city_name: "",
  },
  picture: "",
  condition: "",
  free_shipping: false,
};
