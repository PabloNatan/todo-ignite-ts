import styles from "./styles.module.css";

interface TodoHeaderProps {
  total: number;
  todosCompleted: number;
}

export function TodoHeader({ todosCompleted, total }: TodoHeaderProps) {
  return (
    <div className={styles.container}>
      <p>
        Tarefas criadas <span>{total}</span>
      </p>

      <p>
        Concluídas{" "}
        <span>
          {todosCompleted === 0
            ? todosCompleted
            : `${todosCompleted} de ${total}`}
        </span>
      </p>
    </div>
  );
}
