import {configureStore} from '@reduxjs/toolkit';
import {loginSlice} from './countState';

export const store = configureStore({
  reducer: {
    loginReducer: loginSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type store
export type AppDispatch = typeof store.dispatch;
