import React from 'react'

export default function SingleTransaction(props) {

    const { text, amount } = props.transaction

    return (
        <div className={`col-12 box-with-shadow item-box my-2 ${(amount > 0) ? 'item-income' : 'item-expense'}`}>
            <span className='item-name'>{text}</span>
            <div className='list-right'>
                <span className='item-price'>{`${(amount > 0) ? '+' : ''}${amount}`}</span>
                <button className='delete-btn'>x</button>
            </div>
        </div>
    )
}