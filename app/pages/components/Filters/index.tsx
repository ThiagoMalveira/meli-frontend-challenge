import { IFilters, ISorts } from "@/service/product/types";
import { IProductParams } from "@/store/product/types";
import OrderFilter from "./OrderFilter";
import PriceFilter from "./PriceFilter";
import styles from "./styles.module.css";

type IFiltersComponent = {
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
