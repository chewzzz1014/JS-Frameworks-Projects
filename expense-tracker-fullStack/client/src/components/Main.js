import React from 'react'
import TransactionList from './TransactionList'

function Main() {
    return (
        <div className='main row mt-5'>
            <h3 className='px-0 slight-bold'>History</h3>
            <hr />
            <TransactionList />
        </div>
    )
}

export default Main