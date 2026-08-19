import Button from "../../Button/Button";
import styles from "./TodoItem.module.css";

function TodoItem({ id, text, completed, onToggle, onDelete }) {
  return (
    <li className={styles.item}>
      <label className={styles.checkboxLabel}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={completed}
          onChange={() => onToggle(id)}
        />
        <span className={`${styles.text} ${completed ? styles.textDone : ""}`}>
          {text}
        </span>
      </label>
      <Button variant="icon" onClick={() => onDelete(id)}>
        ✕
      </Button>
    </li>
  );
}
export default TodoItem;
