import styles from "@/styles/Todoitem.module.css";
export default function Todoitem({ message, key }) {
  return (
    <div key={key} className={styles.main}>
      {message}
    </div>
  );
}
