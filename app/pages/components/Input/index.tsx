import Button from "../Button";
import { SearchIcon } from "../SearchIcon";
import styles from "./styles.module.css";

type IInput = {
  handleChange: (newSearchTerm: string) => void;
  action: () => void;
};

export default function Input({ handleChange, action }: Readonly<IInput>) {
  return (
    <div className={styles.inputWrapper}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Nunca dejes de buscar"
        onChange={(event) => handleChange(event.target.value)}
        autoCapitalize="off"
        autoCorrect="off"
        spellCheck="false"
      />
      <Button onClick={action} disabled={false}>
        <SearchIcon />
      </Button>
    </div>
  );
}
