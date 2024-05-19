import { Suspense, lazy } from "react";
import styles from "./styles.module.css";
import { IFiltersComponent } from "./types";

const OrderFilter = lazy(() => import("./OrderFilter"));
const PriceFilter = lazy(() => import("./PriceFilter"));

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
