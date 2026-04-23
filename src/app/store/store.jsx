import { configureStore } from "@reduxjs/toolkit";
import playerReducer from '../../features/player/state/PlayerSlice'
import errorReducer from '../../shared/state/errorSlice'

export let store = configureStore({
    reducer:{
        player : playerReducer,
        error : errorReducer
    }
})

export let dispatch = store.dispatch //this is the solution jab you are not able to call dispatch under a hook