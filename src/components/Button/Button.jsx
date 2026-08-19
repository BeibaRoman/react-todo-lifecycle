import styles from "./Button.module.css";

function Button({ variant = "primary", type = "button", children, onClick }) {
  return (
    <button
      className={`${styles.button} ${styles[variant]}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
