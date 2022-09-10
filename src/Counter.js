import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

function Counter() {
  // 배열 첫 번째: 실제 값, 배열 두 번째: setter
  // const numberState = useState(0);
  // const number = numberState[0];
  // const setNumber = numberState[1];

  const [number, dispatch] = useReducer(reducer, 5);
  console.log(number);
  console.log(dispatch);
  //const [number, setNumber] = useState(0);

  const onIncrease = () => {
    dispatch({ type: "INCREMENT" });
  };

  const onDecrease = () => {
    dispatch({ type: "DECREMENT" });
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
