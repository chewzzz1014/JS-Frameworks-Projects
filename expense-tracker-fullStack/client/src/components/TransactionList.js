import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import SingleTransaction from './SingleTransaction'

function TransactionList() {

    const { transactions } = useContext(GlobalContext)
    console.log(transactions)

    return (
        < div className='col-12' >
            <div className='row'>
                {
                    transactions.map(t =>
                        <SingleTransaction
                            key={t.id}
                            transaction={t}
                        />
                    )
                }
            </div>
        </div >
    )
}

export default TransactionList