import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
};
const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    // checkAuth(state,{payload}){
    //     if(payload.name==="hello"&&payload.pass==="mkm234"){
    //         state.isAuth=true;
    //     }
    //     else
    //         state.isAuth=false; 
    // }
    login(state){
         state.isAuth = true; 
    },
    logout(state){
        state.isAuth = false; 
    }
  },
});

// const auth = configureStore({ reducer: { auth: authSlice.reducer } });
const authActions = authSlice.actions;
export{
    authActions
}
export default authSlice.reducer;
