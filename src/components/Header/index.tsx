import styles from "./styles.module.css";
import appLogo from "../../assets/todo-logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={appLogo} />
    </header>
  );
}
