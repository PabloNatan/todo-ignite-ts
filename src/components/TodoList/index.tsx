import styles from "./styles.module.css";

import clipBoardImage from "../../assets/clipboard.png";
import { ITodo } from "../../App";
import { TodoItem } from "../TodoItem";

interface TodoListProps {
  todos: ITodo[];
  onDeleteTodo: (todoId: string) => void;
  onToggleTodoStatus: (todoId: string) => void;
}

export function TodoList({
  todos,
  onDeleteTodo,
  onToggleTodoStatus,
}: TodoListProps) {
  return (
    <div className={styles.container}>
      {todos.length === 0 ? (
        <div className={styles.emptyList}>
          <img src={clipBoardImage} alt="Clipboard Icon" />
          <p>Você ainda não tem tarefas cadastradas</p>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      ) : (
        <ul>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              isCompleted={todo.isCompleted}
              content={todo.content}
              onDeleteTodo={onDeleteTodo}
              onToggleTodoStatus={onToggleTodoStatus}
              id={todo.id}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
