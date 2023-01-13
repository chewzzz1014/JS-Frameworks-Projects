import { cartActions } from "./cart-slice"
import { uiActions } from "./ui-slice"

export const fetchData = () => {
    return async (dispatch) => {
        const fetchHandler = async () => {
            const res = await fetch('https://redux-tutorial-http-18870-default-rtdb.asia-southeast1.firebasedatabase.app/cartItems.json')
            const data = await res.json()
            return data
        }

        try {
            const cartData = await fetchHandler()
            dispatch(cartActions.replaceData(cartData))
        } catch (error) {
            dispatch(uiActions.showNotification({
                open: true,
                msg: 'Sending Request Failed',
                type: 'error'
            }))
        }
    }
}

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