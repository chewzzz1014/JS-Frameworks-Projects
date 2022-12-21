import React from 'react'

function Header() {
    return (
        <div className='header'>
            <h2 className='title' styles={{ textAlign: 'center' }}>Expense Tracker</h2>
            <h4>YOUR BALANCE</h4>
            <h1>$260.00</h1>
            <div className='income-expense-container'>
                <div className='income-expense-box'>
                    <h4 className='h'>INCOME</h4>
                    <h4 className='h'>$500.00</h4>
                </div>
                <div className='income-expense-box'>
                    <h4 className='h'>EXPENSE</h4>
                    <h4 className='h'>$500.00</h4>
                </div>
            </div>
        </div>
    )
}

export default Header