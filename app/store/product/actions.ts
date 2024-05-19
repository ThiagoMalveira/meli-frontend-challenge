import { ProductService } from "@/service/product";
import { ThunkAction, UnknownAction } from "@reduxjs/toolkit";
import { RootState } from "../type";
import { filter, product, sort } from "./slice";
import { IProductParams } from "./types";

export function searchProducts(
  productService: ProductService,
  payload: IProductParams
): ThunkAction<void, RootState, undefined, UnknownAction> {
  return async (dispatch) => {
    try {
      const { searchResults, availableSorts, availableFilters } =
        await productService.search(payload);

      if (!searchResults) {
        throw new Error(`Failed to get results on action`);
      }

      if (searchResults) {
        dispatch(product(searchResults));
        dispatch(sort(availableSorts));
        dispatch(filter(availableFilters));

        return;
      }
    } catch (err) {
      throw new Error(`Failed to run action ${err}`);
    }
  };
}
