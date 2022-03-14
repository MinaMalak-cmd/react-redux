import { useDispatch, useSelector } from "react-redux";
import { Actions } from "../store/index";
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
  const ch = useSelector((state: any) => console.log(state));
  return (
    <main className={`counter`}>
      <h1>Redux Counter</h1>
      <div className={`value`}>-- {show && value} --</div>
      <button onClick={() => dispatch(Actions.increment())}>Increment</button>
      <button onClick={() => dispatch(Actions.incrementByValue(6))}>
        Increment by 6
      </button>
      <button className="" onClick={() => dispatch(Actions.decrement())}>
        Decrement
      </button>
      <br />
      <button className="btn1" onClick={() => dispatch(Actions.toggle())}>
        Toggle
      </button>
    </main>
  );
};

export default Counter;
