import styles from "./Header.module.css";

import Button from "../Button/Button";

function Header({ onOpenModal, activeCount }) {
  return (
    <div className={styles.header}>
      <div className={styles.titleRow}>
        <h1 className={styles.title}>My Tasks</h1>
        <p className={styles.counter}>{activeCount} tasks left</p>
      </div>
      <Button variant="primary" onClick={onOpenModal}>
        + Add task
      </Button>
    </div>
  );
}

export default Header;
