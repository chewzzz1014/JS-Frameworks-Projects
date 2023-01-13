// without using redux toolkit

/*
// put all React state here
import { createStore } from 'redux'

// reducer
// assign initial state 
const reducerFunc = (state = { counter: 0 }, action) => {
    // synchronous function
    // must not mutate the original state

    switch (action.type) {
        case 'INC':
            return {
                counter: state.counter + 1
            }
        case 'DESC':
            return {
                counter: state.counter - 1
            }
        case 'ADD':
            return {
                counter: state.counter + action.payload
            }
    }

    return state
}

const store = createStore(reducerFunc)
export default store

*/

/*
import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: { counter: 0 },
    reducers: {
        increment(state, action) {
            state.counter++
        },
        decrement(state, action) {
            state.counter--
        },
        addBy(state, action) {
            state.counter += action.payload
        }
    }
})

export const actions = counterSlice.actions

const store = configureStore({
    reducer: counterSlice.reducer
})

export default store
*/

import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import cartSlice from "./cart-slice";
import uiSlice from "./ui-slice";

// create store from slide
const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        cart: cartSlice.reducer,
        ui: uiSlice.reducer
    }
})

export default store 