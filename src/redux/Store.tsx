import { configureStore } from "@reduxjs/toolkit";
import productsSlice  from "./productsSlice";

export const store = configureStore({
    reducer:{
        productsSlice
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;