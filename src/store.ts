import { configureStore } from "@reduxjs/toolkit";
import catsReducer from './features/catsSlice';

export const store = configureStore({
    reducer: catsReducer
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;