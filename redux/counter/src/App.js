import React, { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from 'react-redux'
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import Notification from "./components/Notification";
import { uiActions } from './store/ui-slice'

function App() {
  const cart = useSelector(state => state.cart)
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  const dispatch = useDispatch()
  const notification = useSelector(state => state.ui.notification)

  useEffect(() => {

    const sendRequest = async () => {
      // show noti before sending
      dispatch(uiActions.showNotification({
        open: true,
        msg: 'Sending Request',
        type: 'warning'
      }))

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

    sendRequest().catch(err => {
      dispatch(uiActions.showNotification({
        open: true,
        msg: 'Sending Reuqest Failed',
        type: 'error'
      }))
    })
  }, [cart])

  return (
    <div className="App">
      <Notification type={notification.type} msg={notification.msg} />
      {isLoggedIn ? <Layout /> : <Auth />}
    </div>
  );
}

export default App;