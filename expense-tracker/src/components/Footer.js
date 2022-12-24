import React from 'react'
import Form from './Form'

function Footer(props) {

    const { inputText, inputAmount, setInputText, setInputAmount } = props

    return (
        <div className='footer row'>
            <h3 className='col-12 mt-5 p-0 slight-bold'>Add new transaction</h3>
            <hr className='mb-4' />
            <Form  {
                ...{
                    inputText,
                    inputAmount,
                    setInputText,
                    setInputAmount
                }
            }
            />
        </div>
    )
}

export default Footer