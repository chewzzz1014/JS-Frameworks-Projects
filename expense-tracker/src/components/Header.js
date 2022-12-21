import React from 'react'

function Header() {
    return (
        <div className='header row'>
            <h2 className='title col-12'>Expense Tracker</h2>
            <h4 className='col-12'>YOUR BALANCE</h4>
            <h1>$260.00</h1>
            <div className=''>
                <div className='row'>
                    <div className=' col-6'>
                        <h4>INCOME</h4>
                        <h4>$500.00</h4>
                    </div>
                    <div className='col-6'>
                        <h4>EXPENSE</h4>
                        <h4>$500.00</h4>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Header