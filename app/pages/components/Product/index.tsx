import { IProductState } from "@/store/product/types";
import convertPrice from "@/utils/convertPrice";
import Image from "next/image";
import TruckIcon from "../TruckIcon";
import styles from "./styles.module.css";

type IProduct = {
  item: IProductState;
};

const Product = ({ item }: IProduct) => {
  return (
    <div className={styles.wrapperProduct}>
      <Image
        className={styles.imageProduct}
        src={item.picture}
        width={128}
        height={128}
        alt={item.title}
        style={{ borderRadius: 4 }}
      />
      <div className={styles.wrapperInfo}>
        <div className={styles.wrapperPaymentInfo}>
          <span className={styles.productInfo}>{item.price.amount}</span>
          {item.free_shipping && (
            <div className={styles.isFull}>
              <TruckIcon />
            </div>
          )}
        </div>
        <span className={styles.productInfo}>{item.title}</span>
        {item.installments.quantity > 1 && (
          <span className={styles.installmentsInfoText}>{`En ${
            item.installments.quantity
          } de ${convertPrice(
            parseInt(item.installments.amount),
            item.price.currency
          )}`}</span>
        )}
      </div>
      <div className={styles.wrapperCity}>
        <span className={styles.addressCityText}>{item.address.city_name}</span>
      </div>
    </div>
  );
};

export default Product;
