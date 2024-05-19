import { IFilters } from "@/types/Filters";

export type IPriceFilter = {
  filters: IFilters[];
  values: {
    min: string;
    max: string;
  };
  updateMin: (newMin: string) => void;
  updateMax: (newMax: string) => void;
  updatePrice: (newPrice: string) => void;
  actionFilter: () => void;
};
