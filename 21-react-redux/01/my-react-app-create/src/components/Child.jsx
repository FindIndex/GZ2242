import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  selectCount,
  increment,
  decrement,
  incrementWithParam,
  incrementAsync,
} from "store/counterSlice";

export default function Child() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  const decrementHandler = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <button onClick={() => dispatch(increment())}>++</button>
      <p>Child: {count}</p>
      <button onClick={decrementHandler}>--</button>
      <br />
      <button onClick={() => dispatch(incrementWithParam(5))}>
        +5
      </button>
      <button onClick={() => dispatch(incrementWithParam(10))}>
        +10
      </button>
      <br />
      <button onClick={() => dispatch(incrementAsync(3))}>
        async +3*2
      </button>
    </div>
  );
}
