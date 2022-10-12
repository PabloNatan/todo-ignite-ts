import styles from "./styles.module.css";

import { BsTrash } from "react-icons/bs";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsCircle } from "react-icons/bs";
import { ITodo } from "../../App";

interface TodoItemProps extends ITodo {
  onDeleteTodo: (todoId: string) => void;
  onToggleTodoStatus: (todoId: string) => void;
}

export function TodoItem({
  content,
  id,
  isCompleted,
  onDeleteTodo,
  onToggleTodoStatus,
}: TodoItemProps) {
  function handleToggleTodoStatus() {
    onToggleTodoStatus(id);
  }

  function handleDeleteTodo() {
    onDeleteTodo(id);
  }
  return (
    <li className={styles.container}>
      <button
        onClick={handleToggleTodoStatus}
        className={isCompleted ? styles.isCompleted : ""}
      >
        {isCompleted ? <AiFillCheckCircle size={22} /> : <BsCircle size={22} />}
      </button>

      <p className={isCompleted ? styles.isCompleted : ""}>{content}</p>

      <BsTrash size={20} onClick={handleDeleteTodo} />
    </li>
  );
}
