import styles from "./styles.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { ChangeEvent, FormEvent, useState } from "react";

interface TodoFormProps {
  onAddTodo: (todo: string) => void;
}

export function TodoForm({ onAddTodo }: TodoFormProps) {
  const [newTodo, setNewTodo] = useState("");

  function handleChangeNewTodo(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    setNewTodo(event.target.value);
  }

  function handleFormSubmit(event: FormEvent) {
    event.preventDefault();
    onAddTodo(newTodo);
    setNewTodo("");
  }

  const isNewTodoEmpty = newTodo.length === 0;
  return (
    <form className={styles.container} onSubmit={handleFormSubmit}>
      <input
        value={newTodo}
        onChange={handleChangeNewTodo}
        type="text"
        placeholder="Adicione uma nova tarefa"
      />

      <footer>
        <button type="submit" disabled={isNewTodoEmpty}>
          Criar
          <AiOutlinePlusCircle size={22} />
        </button>
      </footer>
    </form>
  );
}
