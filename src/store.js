import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import gameReducer from './gameSlice';
import navigationReducer from './navigationSlice';

const rootReducer = combineReducers({
  game: gameReducer,
  navigation: navigationReducer,
});

export default configureStore({
  reducer: rootReducer,
});
