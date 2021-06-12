import Todoitem from "./todoitem";
import { v4 as uuidv4 } from 'uuid';
export default function Todo({ data }) {
  return (
    <div >
      {data.map((ABC) => (
       <div key={uuidv4()}>
          <Todoitem message={ABC} /> </div>
      ))}
     
    
    </div>
  );
}
