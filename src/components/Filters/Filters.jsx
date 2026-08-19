import Button from "../Button/Button";
import styles from "./Filters.module.css";

const filters = [
  { value: "all", label: "All" },
  { value: "active", label: "Active" },
  { value: "completed", label: "Completed" },
];

function Filters({ currentFilter, onChange }) {
  return (
    <div className={styles.filters}>
      {filters.map(({ label, value }) => (
        <Button
          key={value}
          variant={value === currentFilter ? "ghostActive" : "ghost"}
          onClick={() => onChange(value)}
        >
          {label}
        </Button>
      ))}
    </div>
  );
}

export default Filters;
