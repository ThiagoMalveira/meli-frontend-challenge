import { SearchService } from "@/service/search";
import { ThunkAction, UnknownAction } from "@reduxjs/toolkit";
import { RootState } from "../type";
import { filter, search, sort } from "./slice";
import { ISearchParams } from "./types";

export function searchProducts(
  payload: ISearchParams
): ThunkAction<void, RootState, undefined, UnknownAction> {
  return async (dispatch) => {
    try {
      const { searchResults, availableSorts, availableFilters } =
        await SearchService.search(payload);

      if (!searchResults) {
        throw new Error(`Failed to get results on action`);
      }

      if (searchResults) {
        dispatch(search(searchResults));
        dispatch(sort(availableSorts));
        dispatch(filter(availableFilters));

        return;
      }
    } catch (err) {
      throw new Error(`Failed to run action ${err}`);
    }
  };
}
