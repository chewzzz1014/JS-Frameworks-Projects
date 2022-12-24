import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

function IncomeExpense() {

    const { transactions } = useContext(GlobalContext)

    return (
        <div className=''>
            <div className='row'>
                <div className='box-with-shadow income-expense-box col-6'>
                    <p className='slight-bold mt-2 larger-text'>INCOME</p>
                    <p className='income'>${transactions.reduce((total, t) =>
                        (t.amount > 0) ? total + t.amount : total
                        , 0)}
                    </p>
                </div>
                <div className='box-with-shadow income-expense-box col-6'>
                    <p className='slight-bold mt-2 larger-text'>EXPENSE</p>
                    <p className='expense'>$
                        {transactions.reduce((total, t) =>
                            (t.amount < 0) ? total + Math.abs(t.amount) : total
                            , 0)}
                    </p>
                </div>
            </div>
        </div >
    )
}

export default IncomeExpense