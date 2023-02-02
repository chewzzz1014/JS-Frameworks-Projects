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
        }
    }
})

export const { increment, decrement } = counterSlice.actions

// export for the store
export default counterSlice.reducer