import { createSlice } from "@reduxjs/toolkit";

let errorSlice = createSlice({
    name : "error",
    initialState : {
        error : null
    },
    reducers : {
        addErrors : (state , action)=>{
            state.error = action.payload
        },
        removeErrors : (state)=>{
            state.error = null
        }
    }
})

export let {addErrors,removeErrors} = errorSlice.actions
export default errorSlice.reducer;