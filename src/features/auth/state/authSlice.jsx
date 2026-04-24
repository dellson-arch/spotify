import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name : "auth",
    initialState : {
        users : [],
        isAuthenticated : false,
        isLoading : false
    },
    reducers : {
        registerUser : (state , action)=>{
          state.users.push(action.payload) //“Keep existing users, just add one more”
          state.isAuthenticated = true
          state.isLoading = false
        },
        loginUser : (state , action)=>{
          state.users = action.payload //“Throw away old users, replace with new data”
          state.isAuthenticated = true,
          state.isLoading = false
        }
    }  
})

export const { registerUser,loginUser } = authSlice.actions
export default authSlice.reducer