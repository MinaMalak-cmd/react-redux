import { useDispatch,useSelector } from "react-redux";
import store from "../store/index";
const classes= require("./Counter.module.css");

const Counter = () => {
  const dispatch = useDispatch();
  const value = useSelector((state:{counter:Number})=>state.counter);
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>-- {value} --</div>
      <button onClick={()=>dispatch({type:"increment"})}>+</button>
      <button className="mx-3" onClick={()=>dispatch({type:"decrement"})}>-</button>
    </main>
  );
};

export default Counter;
