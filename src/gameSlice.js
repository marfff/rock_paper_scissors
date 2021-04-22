import { createSlice } from '@reduxjs/toolkit';

export const gameSlice = createSlice({
  name: 'players',
  initialState: {
    player1: null,
    player2: null,
  },
  reducers: {
    setPlayer1: (state, action) => {
      state.player1 = action.payload;
    },
    setPlayer2: (state) => {
      let items = ['paper', 'rock', 'scissors'];
      let randno = Math.floor(Math.random() * 3);
      let itemchoose = items[randno];
      state.player2 = itemchoose;
    },
  },
});

export default gameSlice.reducer;

// Action creators are generated for each case reducer function
export const { setPlayer1, setPlayer2 } = gameSlice.actions;
