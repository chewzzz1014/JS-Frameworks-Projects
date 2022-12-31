import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState'
import SingleTransaction from './SingleTransaction'

function TransactionList() {

    const { transactions, getTransactions } = useContext(GlobalContext)
    console.log(transactions)

    useEffect(() => {
        getTransactions()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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