import { useMemo, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [square, setSquare] = useState(0);

  const onCalc = (input) => {
    for (let i = 0; i < 1000000000; i++) {}

    return input * input;
  };
  //If we are not using the useMemo Hook we see a delay in the functionality
  //   let squareNumber = onCalc(square);

  let squareNumber = useMemo(() => onCalc(square), [square]);

  return (
    <div className="main-container">
      <div className="container">
        <p>{count}</p>
        <input
          type="button"
          value="increement"
          onClick={() => setCount((prev) => prev + 1)}
        />
        <input type="number" onChange={(e) => setSquare(e.target.value)} />
        <p>Squared number is {squareNumber}</p>
      </div>
    </div>
  );
}

export default App;
