export type IFilters = {
  id: string;
  name: string;
  type: string;
  values: Filters[];
};

export type Filters = {
  id: string;
  name: string;
  results: number;
};
