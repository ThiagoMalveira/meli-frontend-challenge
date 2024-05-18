import { ISearchState } from "@/store/search/types";
import Image from "next/image";
import styles from "./styles.module.css";

type IProduct = {
  item: ISearchState;
};

const Product = ({ item }: IProduct) => {
  return (
    <div className={styles.wrapperProduct}>
      <Image src={item.picture} width={100} height={100} alt={item.title} />
    </div>
  );
};

export default Product;
