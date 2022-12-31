import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export default function SingleTransaction(props) {

    const { deleteTransaction } = useContext(GlobalContext)
    const { _id, text, amount } = props.transaction

    return (
        <div className={`col-12 box-with-shadow item-box my-2 ${(amount > 0) ? 'item-income' : 'item-expense'}`}>
            <span className='item-name'>{text}</span>
            <div className='list-right'>
                <span className='item-price'>{`${(amount > 0) ? '+' : '-'}$${(amount > 0) ? amount : String(amount).slice(1)}`}</span>
                <button className='delete-btn' onClick={() => deleteTransaction(_id)}>x</button>
            </div>
        </div>
    )
}