import styles from "./styles.module.css";
import { ButtonProps } from "./types";

export default function Button({
  onClick,
  disabled,
  children,
}: Readonly<ButtonProps>) {
  return (
    <button
      id="search"
      onClick={onClick}
      disabled={disabled}
      className={styles.search}
    >
      {children}
    </button>
  );
}
