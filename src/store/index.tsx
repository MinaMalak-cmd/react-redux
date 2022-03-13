import { createStore } from "redux";

const counterReducer = (state = { counter: 0 }, action:{type:string}) => {
  console.log(action);
  switch (action.type) {
      case "increment":
      console.log(action.type,state.counter + 1)
        return {
          counter: state.counter + 1,
        };
      case "decrement":
        return {
          counter: state.counter - 1,
        };
      default:
        return state;
    }
  };
  const store = createStore(counterReducer); //takes a reducer function
  export default store;