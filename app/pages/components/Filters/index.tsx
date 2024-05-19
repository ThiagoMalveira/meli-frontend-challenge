import { IFilters, ISorts, values } from "@/service/search/types";
import { ISearchParams } from "@/store/search/types";
import { generateKey } from "@/utils/generateKey";
import ArrowIcon from "../ArrowIcon";
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
      <div>
        <label htmlFor="sort" className={styles.labelSort}>
          Ordenar por:{" "}
        </label>
        <select
          id="sort"
          value={params.sort}
          onChange={(event) => updateSort(event.target.value)}
          className={styles.selectSort}
        >
          {sort.map((option: ISorts) => {
            return (
              <option
                key={generateKey()}
                value={option.id}
                disabled={option.id === params.sort}
              >
                {option.name}
              </option>
            );
          })}
        </select>
      </div>
      {filters[0] && (
        <div className={styles.priceWrapper}>
          <h3 className={styles.filterTitle}>{filters[0].name}</h3>
          {filters[0].values.map((priceFilter: values) => {
            return (
              <div
                key={generateKey()}
                className={styles.priceRange}
                onClick={() => updatePrice(priceFilter.id)}
              >
                {priceFilter.name} <span>({priceFilter.results})</span>
              </div>
            );
          })}
          <div className={styles.wrapperFormPrice}>
            <input
              type="text"
              className={styles.inputPrice}
              pattern="[0-9]*"
              inputMode="numeric"
              placeholder="Mínimo"
              value={values.min}
              onChange={(event) => updateMin(event.target.value)}
            />
            <input
              type="text"
              className={styles.inputPrice}
              pattern="[0-9]*"
              inputMode="numeric"
              placeholder="Máximo"
              value={values.max}
              onChange={(event) => updateMax(event.target.value)}
            />
            <button
              onClick={actionFilter}
              className={styles.filterButton}
              disabled={!values.max && !values.min}
            >
              <ArrowIcon />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filters;
