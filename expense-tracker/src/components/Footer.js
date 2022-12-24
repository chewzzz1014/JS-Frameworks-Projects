import React from 'react'
import Form from './Form'

function Footer(props) {

    return (
        <div className='footer row'>
            <h3 className='col-12 mt-5 p-0 slight-bold'>Add new transaction</h3>
            <hr className='mb-4' />
            <Form />
        </div>
    )
}

export default Footer