import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store/index";
import "./Counter.css";

interface IState {
  counter: Number;
  show: boolean;
}
interface ICounter{
  counter:IState
}
const Counter = () => {
  const dispatch = useDispatch();
  const value = useSelector((state: ICounter) => state.counter.counter);
  const show = useSelector((state: ICounter) => state.counter.show);
  return (
    <main className={`counter`}>
      <h1>Redux Counter</h1>
      <div className={`value`}>-- {show && value} --</div>
      <button onClick={() => dispatch(counterActions.increment())}>Increment</button>
      <button onClick={() => dispatch(counterActions.incrementByValue(6))}>
        Increment by 6
      </button>
      <button className="" onClick={() => dispatch(counterActions.decrement())}>
        Decrement
      </button>
      <br />
      <button className="btn1" onClick={() => dispatch(counterActions.toggle())}>
        Toggle
      </button>
    </main>
  );
};

export default Counter;