import { createSlice } from '@reduxjs/toolkit';

export const gameSlice = createSlice({
  name: 'players',
  initialState: {
    player1: null,
    player2: null,
    score: 0,
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
    increment: (state) => {
      state.score += 1;
    },
    decrement: (state) => {
      state.score -= 1;
    },
  },
});

export default gameSlice.reducer;

export const {
  setPlayer1,
  setPlayer2,
  increment,
  decrement,
} = gameSlice.actions;
