import Image from "next/image";
import Input from "../Input";
import styles from "./styles.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <div className={styles.logoWrapper}>
          <Image
            src="/images/logo_ml.png"
            alt="logo mercado livre"
            width={59}
            height={40}
          />
        </div>
        <Input />
      </div>
    </header>
  );
}
