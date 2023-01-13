import React, { useEffect } from "react";
import "./App.css";
import { useSelector } from 'react-redux'
import Auth from "./components/Auth";
import Layout from "./components/Layout";

function App() {
  const cart = useSelector(state => state.cart)
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)

  useEffect(() => {

    const sendRequest = async () => {
      const res = await fetch('https://redux-tutorial-http-18870-default-rtdb.asia-southeast1.firebasedatabase.app/cartItems.json', {
        method: 'PUT',
        body: JSON.stringify(cart)
      })
      const data = await res.json()
    }

    sendRequest()
  }, [cart])

  return (
    <div className="App">
      {isLoggedIn ? <Layout /> : <Auth />}
    </div>
  );
}

export default App;