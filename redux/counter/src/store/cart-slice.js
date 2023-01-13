import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from './ui-slice'

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

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(uiActions.showNotification({
            open: true,
            msg: 'Sending Request',
            type: 'warning'
        }))

        const sendRequest = async () => {
            // send state to firebase
            const res = await fetch('https://redux-tutorial-http-18870-default-rtdb.asia-southeast1.firebasedatabase.app/cartItems.json', {
                method: 'PUT',
                body: JSON.stringify(cart)
            })

            const data = await res.json()

            // show noti after successful
            dispatch(uiActions.showNotification({
                open: true,
                msg: 'Successfully sent request to database',
                type: 'success'
            }))
        }

        try {
            await sendRequest()
        } catch (error) {
            dispatch(uiActions.showNotification({
                open: true,
                msg: 'Sending Request Failed',
                type: 'error'
            }))
        }
    }
}

export const cartActions = cartSlice.actions

export default cartSlice