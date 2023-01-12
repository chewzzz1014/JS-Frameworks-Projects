import React, { useState } from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useSelector } from "react-redux";
const CartItems = () => {

    const cartItems = useSelector(state => state.cart.itemList)

    return (
        <div className="cart-container">
            <h2>Your Cart</h2>
            <ul>
                {cartItems.map(i => (
                    <li key={i.id}>
                        {' '}
                        <CartItem
                            quantity={i.quantity}
                            id={i.id}
                            price={i.price}
                            total={i.totalPrice}
                            name={i.name}
                        />
                        {' '}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CartItems;