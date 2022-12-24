import React from 'react'
import Balance from './Balance'
import IncomeExpense from './IncomeExpense'

function Header() {
    return (
        <div className='header row'>
            <h2 className='title col-12 mb-5'>Expense Tracker</h2>
            <div className='header-balance-display'>
                <p className='col-12 slight-bold'>YOUR BALANCE</p>
                <Balance />
            </div>
            <IncomeExpense />
        </div >
    )
}

export default Header