import React from 'react'

function IncomeExpense() {
    return (
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
    )
}

export default IncomeExpense