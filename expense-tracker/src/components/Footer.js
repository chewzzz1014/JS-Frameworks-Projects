import React from 'react'

function Footer() {
    return (
        <div className='footer row'>
            <h3 className='col-12 mt-5 p-0 slight-bold'>Add new transaction</h3>
            <hr className='mb-4' />
            <div className='col-12'>
                <form action="" className='row'>
                    <label htmlFor="item" className='form-label col-12 px-0 slight-bold'>Text</label>
                    <input type="text" className='form-control mb-3' id='item' placeholder='Enter text...' name='new-item-name' />


                    <label htmlFor="amount" className='form-label px-0 slight-bold'>Amount<br /> (negative - expense, positive - income)</label>
                    <input type="text" className='form-control mb-4' id='amount' placeholder='Enter amounnt...' name='new-item-amount' />

                    <button type="submit" class="btn btn-primary slight-bold">Add transaction</button>
                </form>
            </div>
        </div>
    )
}

export default Footer