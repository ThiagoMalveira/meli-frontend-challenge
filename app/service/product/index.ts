import { DEFAULT_URL } from "@/config";
import { IFilters } from "@/types/Filters";
import {
  IProductParams,
  IProductRepository,
  IProductState,
  ProductOnApi,
} from "@/types/Products";
import { ISorts } from "@/types/Sorts";
import convertPrice from "@/utils/convertPrice";
import extractDecimals from "@/utils/extractDecimals";
import { translateUrlParam } from "@/utils/translateUrlParams";
import { URL } from "../pathUrl";

export class ProductService implements IProductRepository {
  async search(queryParams: IProductParams) {
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

      const searchResults: IProductState = response.results.map(
        (item: ProductOnApi) => {
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
      // API retornou legal, mas o sort de menor preço trás o maior preço e o de maior trás o menor...
      const availableSorts: ISorts[] = response.available_sorts
        .map((sorts: ISorts) => {
          return {
            id: sorts.id,
            name: sorts.name,
          };
        })
        .concat(response.sort)
        .reverse(); // Esse reverse é para fazer o sort que está selecionado sempre ficar em primeiro na lista

      // API retorna os preços para serem filtrados, porém ele altera os filtros de preço a cada requisição e as vezes pode trazer produtos que não fazem sentido.
      const availableFilters: IFilters[] = response.available_filters.filter(
        (filter: IFilters) => filter.id === "price"
      );

      return { searchResults, availableSorts, availableFilters };
    } catch (err) {
      throw new Error(`Failed to fetch on search ${err}`);
    }
  }
}
