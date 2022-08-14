import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, reset } from "../features/counter/counterSlice";

export default function Counter() {

  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(decrement())}>Уменьшить</button>
      <button onClick={() => dispatch(reset())}>Сброс</button>
      <button onClick={() => dispatch(increment())}>Увеличить</button>
    </div>
  );
}
