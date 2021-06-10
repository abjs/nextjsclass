import Todoitem from "./todoitem";
export default function Todo({ data }) {
  return (
    <div>
      {data.map((todo, index) => (
        <Todoitem key={index} message={todo} />
      ))}
    </div>
  );
}
