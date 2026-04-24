import { createSlice } from "@reduxjs/toolkit";

let playerSlice = createSlice({
  name: "player",
  initialState: {
    queue: [],
    currentPlayingSong: null,
    isPlaying: false,
  },
  reducers: {
    playNewSong: (state, action) => {
      const songIdentifier = action.payload.id || action.payload.url;

      ((state.currentPlayingSong = action.payload), //song ki mere ko puri ki puri details bhejni hai
        (state.isPlaying = true));
      const isExist = state.queue.find(
        (s) => (s.id || s.url) === songIdentifier,
      );
      if (!isExist) {
        state.queue.push(action.payload);
      }
    },
    play: (state) => {
      state.isPlaying = true;
    },
    pause: (state) => {
      state.isPlaying = false;
    },
    nextSong: (state) => {
      if (state.queue.length > 0 && state.currentPlayingSong) {
        //ab next song jao chahe prev song jao aapko currentIndex toh pata hona hi chahiye
        const currentId =
          state.currentPlayingSong.id || state.currentPlayingSong.url;
        let currentindex = state.queue.findIndex(
          (s) => (s.id || s.url) === currentId,
        );
        if (currentindex < state.queue.length - 1) {
          state.currentPlayingSong = state.queue[currentindex + 1];
        } else {
          state.currentPlayingSong = state.queue[0];
        }
      }
    },
    prevSong: (state) => {
      if (state.queue.length > 0 && state.currentPlayingSong) {
        //ab next song jao chahe prev song jao aapko currentIndex toh pata hona hi chahiye
        const currentId =
          state.currentPlayingSong.id || state.currentPlayingSong.url;
        let currentindex = state.queue.findIndex(
          (s) => (s.id || s.url) === currentId,
        );
        if (currentindex > 0) {
          state.currentPlayingSong = state.queue[currentindex - 1];
        } else {
          state.currentPlayingSong = state.queue[state.queue.length - 1];
        }
      }
    },
  },
});

export let { playNewSong, play, pause, nextSong, prevSong } =
  playerSlice.actions;
export default playerSlice.reducer;
