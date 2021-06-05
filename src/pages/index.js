import styles from "@/styles/Home.module.css";
import { useState } from "react";

export default function Home() {
  const Submit = (event) => {
    event.preventDefault();
    const data = event.target.todo.value;
    event.target.todo.value = "";
    settodo([...todo,data]);
  };
  const [todo, settodo] = useState([]);
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


      {/* {
        todo.map(function(data,index) {
          return(
            <h1 key={index} >{data}</h1>
          )
        })
      } */}

      {
        todo.map((data,index)=><h1 key={index}>{data}</h1>)
      }




    </div>
  );
}
