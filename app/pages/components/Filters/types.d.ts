import { IFilters } from "@/types/Filters";
import { IProductParams } from "@/types/Products";
import { ISorts } from "@/types/Sorts";

export type IFiltersComponent = {
  updatePrice: (newPrice: string) => void;
  updateSort: (newSort: string) => void;
  params: IProductParams;
  sort: ISorts[];
  filters: IFilters[];
  updateMin: (newMin: string) => void;
  updateMax: (newMax: string) => void;
  values: {
    min: string;
    max: string;
  };
  actionFilter: () => void;
};
