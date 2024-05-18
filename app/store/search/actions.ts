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
      const result = await SearchService.search(payload);

      if (!result) {
        throw new Error(`Failed to get results on action`);
      }

      dispatch(search(result));
    } catch (err) {
      throw new Error(`Failed to run action ${err}`);
    }
  };
}
