import { useRef } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from "./features/counter/counterSlice";

function App() {
  const input = useRef();

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const onIncreementHandler = () => {
    dispatch(increment());
  };

  const onDecreementHandler = () => {
    dispatch(decrement());
  };

  const onResetHandler = () => {
    dispatch(reset());
  };

  const onIncreementByHandler = () => {
    dispatch(incrementByAmount(input.current.value));
  };

  return (
    <>
      <div className="main-container">
        <div className="container">
          <p>Counter : {count}</p>
          <div className="btn-container">
            <input
              type="button"
              className="btn"
              value="Increement +"
              onClick={onIncreementHandler}
            />
            <input
              type="button"
              className="btn"
              value="Decreement -"
              onClick={onDecreementHandler}
            />
            <input
              type="button"
              className="btn"
              value="Reset"
              onClick={onResetHandler}
            />
          </div>
          <label htmlFor="num-inp">Enter A Value :</label>
          <input
            type="number"
            className="num-inp"
            id="num-inp"
            placeholder="Enter A Number !"
            ref={input}
          />
          <input
            type="button"
            className="btn"
            value="IncreaseBy"
            onClick={onIncreementByHandler}
          />
        </div>
      </div>
    </>
  );
}

export default App;
