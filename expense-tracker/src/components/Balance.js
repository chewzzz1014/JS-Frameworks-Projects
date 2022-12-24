import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

function Balance() {

    const { transactions } = useContext(GlobalContext)

    return (
        < div className='header-balance-display' >
            <p className='col-12 slight-bold'>YOUR BALANCE</p>
            <h1 className='mb-3 balance'>
                $
                <span className='balance'>
                    {transactions.reduce((total, t) => total + t.amount, 0)}
                </span>
            </h1>
        </div>
    )
}

export default Balance