import { createSlice } from "@reduxjs/toolkit";

let playerSlice = createSlice({
    name : "player",
    initialState : {
        currentPlayingSong : null,
        isPlaying : false 
    },
    reducers : {
        playNewSong : (state , action)=>{
            state.currentPlayingSong = action.payload, //song ki mere ko puri ki puri details bhejni hai
            state.isPlaying = true
        },
        play : (state)=>{
            state.isPlaying = true
        },
         pause : (state)=>{
            state.isPlaying = false
        }
    }
})

export let {playNewSong , play , pause} = playerSlice.actions
export default playerSlice.reducer