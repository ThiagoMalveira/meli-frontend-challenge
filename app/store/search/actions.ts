import { SearchService } from "@/service/search";
import { ThunkAction, UnknownAction } from "@reduxjs/toolkit";
import { RootState } from "../type";
import { search } from "./slice";
import { ISearchParams } from "./types";

export function searchProducts(
  payload: ISearchParams
): ThunkAction<void, RootState, undefined, UnknownAction> {
  return async (dispatch) => {
    try {
      const { searchResults } = await SearchService.search(payload);

      if (!searchResults) {
        throw new Error(`Failed to get results on action`);
      }
      if (searchResults) {
        dispatch(search(searchResults));

        return;
      }
    } catch (err) {
      throw new Error(`Failed to run action ${err}`);
    }
  };
}
