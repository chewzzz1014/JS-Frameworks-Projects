import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
}

// counter slice 
export const counterSlice = createSlice({
    name: 'counter',
    // data
    initialState,
    // actions
    reducers: {

        increment: (state) => {
            state.count += 1
        },

        decrement: (state) => {
            state.count -= 1
        },

        reset: (state) => {
            state.count = 0
        },

        incrementByAmount: (state, action) => {
            state.count += action.payload
        }
    }
})

export const { increment, decrement, reset, incrementByAmount } = counterSlice.actions

// export for the store
export default counterSlice.reducer