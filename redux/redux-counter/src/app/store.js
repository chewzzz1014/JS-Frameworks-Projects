// contains all stores of the project
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    }
})