import {configureStore} from '@reduxjs/toolkit';
import instrumentsReducer from './instruments/instrumentsSlice';
import portfolioReducer from './portfolio/portfolioSlice';

export const store = configureStore({
  reducer: {
    instruments: instrumentsReducer,
    portfolio: portfolioReducer,
  },
});

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
