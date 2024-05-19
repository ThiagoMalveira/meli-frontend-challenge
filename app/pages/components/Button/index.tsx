import styles from "./styles.module.css";
import { ButtonProps } from "./types";

export default function Button({
  onClick,
  disabled,
  children,
}: Readonly<ButtonProps>) {
  return (
    <button onClick={onClick} disabled={disabled} className={styles.button}>
      {children}
    </button>
  );
}
