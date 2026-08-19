import { Component } from "react";

import Button from "../../Button/Button";
import styles from "./TodoForm.module.css";

class TodoForm extends Component {
  state = {
    inputValue: "",
    error: "",
  };

  handleChange = (e) => {
    const { value } = e.currentTarget;

    this.setState({
      inputValue: value,
      error: "", // прибираємо помилку, щойно користувач почав виправляти
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.inputValue.trim() === "") {
      this.setState({ error: "Please enter a task" });
      return;
    }

    this.props.onSubmit(this.state.inputValue);

    this.setState({
      inputValue: "",
      error: "",
    });
  };

  render() {
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <label className={styles.label}>
          New task
          <input
            className={`${styles.input} ${this.state.error ? styles.inputError : ""}`}
            type="text"
            name="text"
            value={this.state.inputValue}
            onChange={this.handleChange}
          />
        </label>
        {this.state.error && <p className={styles.error}>{this.state.error}</p>}
        <Button variant="primary" type="submit">
          Add
        </Button>
      </form>
    );
  }
}

export default TodoForm;
