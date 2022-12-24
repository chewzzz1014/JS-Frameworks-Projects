import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState'

function Form(props) {

    const [inputText, setInputText] = useState("")
    const [inputAmount, setInputAmount] = useState(0)
    const { addTransaction } = useContext(GlobalContext)

    function onSubmit(e) {
        e.preventDefault()

        // make a new transaction item
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text: inputText,
            amount: parseFloat(inputAmount)
        }

        addTransaction(newTransaction)
    }

    return (
        <div className='col-12'>
            <form onSubmit={onSubmit} className='row'>
                <label htmlFor="item" className='form-label col-12 px-0 slight-bold'>Text</label>
                <input
                    type="text"
                    className='form-control mb-3'
                    id='item'
                    placeholder='Enter text...'
                    name='new-item-name'
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                />


                <label htmlFor="amount" className='form-label px-0 slight-bold'>Amount<br /> (negative - expense, positive - income)</label>
                <input
                    type="text"
                    className='form-control mb-4'
                    id='amount'
                    placeholder='Enter amounnt...'
                    name='new-item-amount'
                    value={inputAmount}
                    onChange={(e) => setInputAmount(e.target.value)}
                />

                <button
                    type="submit"
                    className="btn btn-primary slight-bold">
                    Add transaction
                </button>
            </form>
        </div>
    )
}

export default Form