import { useState } from "react";

const ManageData = () => {
  const [number, setNumber] = useState(8);
  let someData = 10;
  let count;
  console.log(someData);
  console.log(number);
  console.log(count);


  return (
    <div>
      <h2>useState hook</h2>

      <div>
        <p>Valor: {someData}</p>
        <button onClick={() => (someData += 5)}>Somar 5</button>
      </div>

      <div>
        <p>Valor: {number}</p>
        <button onClick={() => setNumber(count = number + 5)}>useState + 5</button>
      </div>



    </div>
  )
}

export default ManageData