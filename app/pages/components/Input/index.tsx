import Button from "../Button";
import { SearchIcon } from "../SearchIcon";

import styles from "./styles.module.css";

export default function Input() {
  return (
    <div className={styles.inputWrapper}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Nunca dejes de buscar"
        autoCapitalize="off"
        autoCorrect="off"
        spellCheck="false"
      />
      <Button
        icon={<SearchIcon />}
        onClick={() => console.log("pesquisando")}
        disabled={false}
      />
    </div>
  );
}
