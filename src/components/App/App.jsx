import { Component } from "react";
import { nanoid } from "nanoid";
import styles from "./App.module.css";

import Header from "../Header/Header";
import Modal from "../Modal/Modal";
import TodoForm from "../Modal/TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";
import Filters from "../Filters/Filters";

class App extends Component {
  state = {
    todos: [],
    isModalOpen: false,
    filter: "all",
  };

  componentDidMount() {
    const todos = localStorage.getItem("todos");
    const parsedTodos = JSON.parse(todos);

    if (parsedTodos) {
      this.setState({ todos: parsedTodos });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.todos !== prevState.todos) {
      localStorage.setItem("todos", JSON.stringify(this.state.todos));
    }
  }

  addTodo = (text) => {
    const todo = { id: nanoid(), text, completed: false };

    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));

    this.toggleModal();
  };

  deleteTodo = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== id),
    }));
  };

  toggleCompleted = (id) => {
    this.setState(({ todos }) => ({
      todos: todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    }));
  };

  setFilter = (filterValue) => {
    this.setState({ filter: filterValue });
  };

  toggleModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  };

  render() {
    const { todos, filter } = this.state;

    let visibleTodos = todos;

    if (filter === "active") {
      visibleTodos = todos.filter((todo) => !todo.completed);
    }

    if (filter === "completed") {
      visibleTodos = todos.filter((todo) => todo.completed);
    }
    const activeCount = todos.filter((todo) => !todo.completed).length;

    return (
      <div className="wrapper">
        <main className={styles.page}>
          <div className={styles.container}>
            <Header onOpenModal={this.toggleModal} activeCount={activeCount} />
            <Filters currentFilter={filter} onChange={this.setFilter} />
            {this.state.isModalOpen && (
              <Modal onClose={this.toggleModal}>
                {<TodoForm onSubmit={this.addTodo} />}
              </Modal>
            )}
            <TodoList
              todos={visibleTodos}
              onDelete={this.deleteTodo}
              onToggle={this.toggleCompleted}
            />
          </div>
        </main>
      </div>
    );
  }
}
export default App;
