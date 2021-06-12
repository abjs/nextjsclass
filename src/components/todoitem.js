import styles from "@/styles/Todoitem.module.css";
export default function Todoitem({ message}) {
  return (
    <div className={styles.main}>
      {message}
    </div>
  );
}
