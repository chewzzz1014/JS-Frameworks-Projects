import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

function TransactionList() {

    const { transactions } = useContext(GlobalContext)
    console.log(transactions)

    return (
        < div className='col-12' >
            <div className='row'>
                {
                    transactions.map(t => {
                        return (
                            <div className={`col-12 box-with-shadow item-box my-2 ${(t.amount > 0) ? 'item-income' : 'item-expense'}`}>
                                <span className='item-name'>{t.text}</span>
                                <div className='list-right'>
                                    <span className='item-price'>{`${(t.amount > 0) ? '+' : ''}${t.amount}`}</span>
                                    <button className='delete-btn'>x</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div >
    )
}

export default TransactionList