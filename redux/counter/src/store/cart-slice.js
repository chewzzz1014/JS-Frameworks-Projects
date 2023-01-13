import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemList: [],
        totalQuantity: 0,
        showCart: false
    },
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload

            const existingItem = state.itemList.find(i => i.id === newItem.id)

            if (existingItem) {
                existingItem.quantity++
                existingItem.totalPrice += newItem.price
            } else {
                state.itemList.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.name
                })
                state.totalQuantity++
            }
        },
        removeFromCart(state, action) {
            const id = action.payload
            const existingItem = state.itemList.find(i => i.id === id)
            if (existingItem.quantity === 1) {
                state.itemList = state.itemList.filter(i => i.id !== id)
                state.totalQuantity--
            } else {
                existingItem.quantity--
                existingItem.totalPrice -= existingItem.price
            }
        },
        setShowCart(state) {
            state.showCart = !state.showCart
        }
    }
})

export const cartActions = cartSlice.actions

export default cartSlice