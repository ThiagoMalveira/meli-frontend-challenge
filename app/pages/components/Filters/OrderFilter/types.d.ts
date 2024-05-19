import { IProductParams } from "@/types/Products";
import { ISorts } from "@/types/Sorts";

export type IOrderFilter = {
  params: IProductParams;
  updateSort: (newSort: string) => void;
  sort: ISorts[];
};
