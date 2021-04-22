import { createSlice } from '@reduxjs/toolkit';

export const navigationSlice = createSlice({
  name: 'navigation',
  initialState: {
    screen: 'start',
  },
  reducers: {
    setScreen: (state, action) => {
      state.screen = action.payload;
    },
  },
});

export default navigationSlice.reducer;

export const { setScreen } = navigationSlice.actions;
