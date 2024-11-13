import React, { useRef, useState } from "react";

const Timer = () => {
  const intervalId = useRef(null);
  const [start, setStart] = useState(null);
  const [curr, setCurr] = useState(null);

  const onStartHandler = () => {
    setStart(Date.now());
    setCurr(Date.now());
    clearInterval(intervalId.current);
    intervalId.current = setInterval(() => {
      setCurr(Date.now());
    }, 10);
  };

  const onStopHandler = () => {
    clearInterval(intervalId.current);
  };

  const onResetHandler = () => {
    clearInterval(intervalId.current);
    setStart(null);
    setCurr(null);
  };

  let secondsPassed = 0;

  if (curr != null && start != null) {
    secondsPassed = ((curr - start) / 1000).toFixed(3);
  }

  return (
    <div className="main-container">
      <div className="timer-container">
        <p>{secondsPassed}</p>
        <div className="button-container">
          <button onClick={onStartHandler}>Start</button>
          <button onClick={onStopHandler}>Stop</button>
          <button onClick={onResetHandler}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
