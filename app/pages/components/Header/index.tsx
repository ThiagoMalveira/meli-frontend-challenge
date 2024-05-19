import Image from "next/image";
import Input from "../Input";
import styles from "./styles.module.css";

type IHeader = {
  handleChangeSearchTerm: (newSearchTerm: string) => void;
  action: () => void;
};

export default function Header({
  handleChangeSearchTerm,
  action,
}: Readonly<IHeader>) {
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
        <Input handleChange={handleChangeSearchTerm} action={action} />
      </div>
    </header>
  );
}
