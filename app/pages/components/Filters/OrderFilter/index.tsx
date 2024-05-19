import { ISorts } from "@/service/search/types";
import { ISearchParams } from "@/store/search/types";
import { generateKey } from "@/utils/generateKey";
import styles from "./styles.module.css";

type IOrderFilter = {
  params: ISearchParams;
  updateSort: (newSort: string) => void;
  sort: ISorts[];
};

const OrderFilter = ({ sort, params, updateSort }: IOrderFilter) => {
  return (
    <div className={styles.wrapperOrderFilter}>
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
  );
};
export default OrderFilter;
