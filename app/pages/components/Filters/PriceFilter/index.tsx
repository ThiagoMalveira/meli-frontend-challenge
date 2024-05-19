import { IFilters, values } from "@/service/search/types";
import { generateKey } from "@/utils/generateKey";
import styles from "./styles.module.css";

type IPriceFilter = {
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

const PriceFilter = ({
  filters,
  values,
  updateMax,
  updateMin,
  updatePrice,
  actionFilter,
}: IPriceFilter) => {
  return (
    <div>
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
              Filtrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PriceFilter;
