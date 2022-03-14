import { shallowEqual } from "react-redux";
import { createStore } from "redux";

const initialState = {
  counter: 0,
  show:true
}
const counterReducer = (state = initialState, action:{type:string,payload?:number}) => {
  switch (action.type) {
      case "increment":
        return {
          ...state,
          counter: state.counter + 1,
        };
      case "decrement":
        return {
          ...state,
          counter: state.counter - 1,
        };
        case "incrementByValue":
        return {
          ...state,
          counter: state.counter + (action.payload ||1),
        };
        case "toggle":
          return {
            ...state,
            show: !state.show,
          };
      default:
        return state;
    }
  };
  const store = createStore(counterReducer); //takes a reducer function
  export default store;