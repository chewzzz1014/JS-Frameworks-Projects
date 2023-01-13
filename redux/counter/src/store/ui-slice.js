import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        notification: null
    },
    reducers: {
        showMotification(state, action) {
            state.notification = {
                msg: action.payload.msg,
                type: action.payload.type,
                open: action.payload.open
            }
        }
    }
})