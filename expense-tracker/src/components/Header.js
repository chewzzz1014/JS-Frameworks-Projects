import React from 'react'
import Balance from './Balance'

function Header() {
    return (
        <div className='header row'>
            <h2 className='title col-12 mb-5'>Expense Tracker</h2>
            <div className='header-balance-display'>
                <p className='col-12 slight-bold'>YOUR BALANCE</p>
                <Balance />
            </div>
            <div className=''>
                <div className='row'>
                    <div className='box-with-shadow income-expense-box col-6'>
                        <p className='slight-bold mt-2 larger-text'>INCOME</p>
                        <p className='income'>$500.00</p>
                    </div>
                    <div className='box-with-shadow income-expense-box col-6'>
                        <p className='slight-bold mt-2 larger-text'>EXPENSE</p>
                        <p className='expense'>$500.00</p>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Header