export default function Todo({ data }) {
  return (
    <div>
      {data.map((todo, index) => (
        <h1 key={index}>{todo}</h1>
      ))}
    </div>
  );
}
