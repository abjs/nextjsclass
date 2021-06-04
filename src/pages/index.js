import styles from "@/styles/Home.module.css";
export default function Home() {
  function Submit(event) {
    event.preventDefault();
    const data = event.target.todo.value;
    event.target.todo.value="";
    console.log(data);
  }
  return (
    <div className={styles.main}>
      <form onSubmit={Submit}>
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
    </div>
  );
}
