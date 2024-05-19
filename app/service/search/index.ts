import { DEFAULT_URL } from "@/config";
import { ISearchParams, ISearchState } from "@/store/search/types";
import convertPrice from "@/utils/convertPrice";
import extractDecimals from "@/utils/extractDecimals";
import { translateUrlParam } from "@/utils/translateUrlParams";
import { URL } from "../pathUrl";
import { IFilters, ISorts, Product } from "./types";

export const SearchService = {
  search: async (queryParams: ISearchParams) => {
    try {
      const { searchTerm, sort, price } = queryParams;
      const url = translateUrlParam(URL.search, {
        searchTerm,
        sort,
        price,
      });
      const request = await fetch(`${DEFAULT_URL}${url}`);

      if (!request.ok) {
        throw new Error(
          `The request is not valid, please verify and try again.`
        );
      }

      const response = await request.json();

      const searchResults: ISearchState = response.results.map(
        (item: Product) => {
          return {
            id: item.id,
            title: item.title,
            price: {
              currency: item.currency_id,
              amount: convertPrice(item.price, item.currency_id),
              decimals: extractDecimals(item.price),
            },
            installments: {
              quantity: item.installments?.quantity,
              amount: item.installments?.amount,
            },
            address: {
              // Não veio da API
              state_name: "Estado",
              city_name: "Cidade",
            },
            picture: item.thumbnail,
            condition: item.condition,
            free_shipping: item.shipping.free_shipping,
          };
        }
      );

      const availableSorts: ISorts[] = response.available_sorts
        .map((sorts: ISorts) => {
          return {
            id: sorts.id,
            name: sorts.name,
          };
        })
        .concat(response.sort)
        .reverse();

      const availableFilters: IFilters[] = response.available_filters.filter(
        (filter: IFilters) => filter.id === "price"
      );

      return { searchResults, availableSorts, availableFilters };
    } catch (err) {
      throw new Error(`Failed to fetch on search ${err}`);
    }
  },
};
