import {Component} from "react";
import { useDispatch,useSelector,connect } from "react-redux";
import { IncrementExpression } from "typescript";
import store from "../store/index";
const classes= require("./Counter.module.css");

// const Counter = () => {
//   const dispatch = useDispatch();
//   const value = useSelector((state:{counter:Number})=>state.counter);
//   const incrementHandler =()=>{dispatch({type:"increment"})};
//   const decrementHandler =()=>{dispatch({type:"decrement"})};
//   return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       <div className={classes.value}>-- {value} --</div>
//       <button onClick={incrementHandler}>+</button>
//       <button className="mx-3" onClick={decrementHandler}>-</button>
//     </main>
//   );
// };
interface props{
  Counter:any
}
class Counter extends Component{
  incrementHandler(){this.props.increment()}
  decrementHandler(){this.props.decrement()}
  render(){
    return (
          <main className={classes.counter}>
            <h1>Redux Counter</h1>
            <div className={classes.value}>-- {this.props.value} --</div>
            <button onClick={this.incrementHandler.bind(this)}>+</button>
            <button className="mx-3" onClick={this.decrementHandler.bind(this)}>-</button>
          </main>
        );

  }
}
const mapDispatchToProps = (dispatch:any) => {
  return {
    increment: () => dispatch({ type: 'increment' }),
    decrement: () => dispatch({ type: 'decrement' })
  }
}
const mapStateToProps=(state:{counter:number})=> {
  return {
    value:state.counter
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter);
