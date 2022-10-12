import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { Header } from "./components/Header";
import { TodoForm } from "./components/TodoForm";
import { TodoHeader } from "./components/TodoHeader";
import { TodoList } from "./components/TodoList";

import styles from "./App.module.css";
import "./global.css";

export interface ITodo {
  id: string;
  content: string;
  isCompleted: boolean;
}

function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);

  function handleAddTodo(todo: string) {
    const newTodo = { id: uuidv4(), content: todo, isCompleted: false };
    setTodos((oldState) => [...oldState, newTodo]);
  }

  function handleToggleTodo(todoId: string) {
    setTodos((oldState) =>
      oldState.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      })
    );
  }

  function handleDeleteTodo(todoId: string) {
    setTodos((oldState) => oldState.filter((todo) => todo.id !== todoId));
  }

  const todosCompleted = todos.reduce(
    (completdTodos, currentTodo) =>
      completdTodos + (currentTodo.isCompleted === true ? 1 : 0),
    0
  );
  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.content}>
        <TodoForm onAddTodo={handleAddTodo} />
        <TodoHeader total={todos.length} todosCompleted={todosCompleted} />
        <TodoList
          todos={todos}
          onDeleteTodo={handleDeleteTodo}
          onToggleTodoStatus={handleToggleTodo}
        />
      </div>
    </div>
  );
}

export default App;
