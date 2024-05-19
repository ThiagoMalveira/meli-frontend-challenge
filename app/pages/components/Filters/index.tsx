import { IFilters, ISorts } from "@/service/search/types";
import { ISearchParams } from "@/store/search/types";
import OrderFilter from "./OrderFilter";
import PriceFilter from "./PriceFilter";
import styles from "./styles.module.css";

type IFiltersComponent = {
  updatePrice: (newPrice: string) => void;
  updateSort: (newSort: string) => void;
  params: ISearchParams;
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

const Filters = ({
  updatePrice,
  updateSort,
  params,
  sort,
  filters,
  values,
  updateMax,
  updateMin,
  actionFilter,
}: IFiltersComponent) => {
  return (
    <div className={styles.mainFilters}>
      <OrderFilter sort={sort} updateSort={updateSort} params={params} />
      <PriceFilter
        filters={filters}
        values={values}
        actionFilter={actionFilter}
        updateMax={updateMax}
        updateMin={updateMin}
        updatePrice={updatePrice}
      />
    </div>
  );
};

export default Filters;
