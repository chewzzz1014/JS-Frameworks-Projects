import React from 'react'
import Balance from './Balance'
import IncomeExpense from './IncomeExpense'

function Header() {
    return (
        <div className='header row'>
            <h2 className='title col-12 mb-5'>Expense Tracker</h2>
            <Balance />
            <IncomeExpense />
        </div >
    )
}

export default Header