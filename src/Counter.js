import React, { useState } from "react";

function Counter() {
  // 배열 첫 번째: 실제 값, 배열 두 번째: setter
  //const [number, setNumber] = useState(0);
  const numberState = useState(0);
  console.log(numberState);
  const number = numberState[0];
  const setNumber = numberState[1];

  const onIncrease = () => {
    setNumber(n => n + 1);
  };

  const onDecrease = () => {
    setNumber(n => n - 1);
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;
