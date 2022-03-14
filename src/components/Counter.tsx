import { useDispatch, useSelector } from "react-redux";
import store from "../store/index";
import "./Counter.css";

interface IState {
  counter: Number;
  show: boolean;
}
const Counter = () => {
  const dispatch = useDispatch();
  const value = useSelector((state: IState) => state.counter);
  const show = useSelector((state: IState) => state.show);
  return (
    <main className={`counter`}>
      <h1>Redux Counter</h1>
      <div className={`value`}>-- {show&&value} --</div>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button
        onClick={() => dispatch({ type: "incrementByValue", payload: 6 })}
      >
        Increment by 6
      </button>
      <button className="" onClick={() => dispatch({ type: "decrement" })}>
        Decrement
      </button>
      <br />
      <button className="btn1" onClick={() => dispatch({ type: "toggle" })}>
        Toggle
      </button>
    </main>
  );
};

export default Counter;
