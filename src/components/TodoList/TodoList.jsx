import TodoItem from "./TodoItem/TodoItem";
import styles from "./TodoList.module.css";

function TodoList({ todos, onDelete, onToggle }) {
  if (todos.length === 0) {
    return <p className={styles.emptyState}>Nothing here yet</p>;
  }

  return (
    <ul className={styles.list}>
      {todos.map(({ id, text, completed }) => (
        <TodoItem
          key={id}
          text={text}
          completed={completed}
          onDelete={onDelete}
          onToggle={onToggle}
          id={id}
        />
      ))}
    </ul>
  );
}
export default TodoList;
