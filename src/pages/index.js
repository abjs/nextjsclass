import Staus from "@/components/staus";
import Todo from "@/components/todo";
import styles from "@/styles/Home.module.css";
import { useState } from "react";

export default function Home() {
  const Submit = (event) => {
    event.preventDefault();
    const data = event.target.todo.value;
    event.target.todo.value = "";
    console.log(data);
    settodo([...todo, data]);
  };

  const [todo, settodo] = useState([]);
  return (
    <div className={styles.main}>
      <form onSubmit={Submit} className={styles.form}>
        <input
          type="text"
          name="todo"
          className={styles.input}
          placeholder="Enter Todo"
        />
        <button type="submit" className={styles.button}>
          Add Todo
        </button>
      </form>

      <div className={styles.todo}>
        <Todo data={todo} />
      </div>
      <Staus />
    </div>
  );
}
