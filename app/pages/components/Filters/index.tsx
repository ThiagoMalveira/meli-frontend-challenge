import { IFilters, ISorts } from "@/service/product/types";
import { IProductParams } from "@/store/product/types";
import { Suspense, lazy } from "react";
import styles from "./styles.module.css";

const OrderFilter = lazy(() => import("./OrderFilter"));
const PriceFilter = lazy(() => import("./PriceFilter"));

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
      <Suspense>
        <OrderFilter sort={sort} updateSort={updateSort} params={params} />
        <PriceFilter
          filters={filters}
          values={values}
          actionFilter={actionFilter}
          updateMax={updateMax}
          updateMin={updateMin}
          updatePrice={updatePrice}
        />
      </Suspense>
    </div>
  );
};

export default Filters;
