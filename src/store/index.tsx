import {  configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux';
import {counterActions} from "../store/counter";
import counterReducers from "../store/counter";
import {authActions} from "../store/auth";
import authReducers from "../store/auth";
const store = configureStore({
  reducer:{
    counter:counterReducers,
    auth:authReducers
  }
})
export{
  counterActions,
  authActions
};
export default store;