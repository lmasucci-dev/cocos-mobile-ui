import {configureStore} from '@reduxjs/toolkit';
import instrumentsReducer from './instruments/instrumentsSlice';

export const store = configureStore({
  reducer: {
    instruments: instrumentsReducer,
  },
});

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
