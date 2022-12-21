import React from 'react'

function Footer() {
    return (
        <div className='footer row'>
            <h3 className='col-12'>Add new transaction</h3>
            <hr />
            <div className='col-12'>
                <form action="" className='row'>
                    <label htmlFor="item" className='form-label col-12'>Text</label>
                    <input type="text" className='form-control mb-3' id='item' placeholder='Enter text...' />


                    <label htmlFor="amount" className='form-label'>Amount<br /> (negative - expense, positive - income)</label>
                    <input type="text" className='form-control mb-3' id='amount' placeholder='Enter amounnt...' />

                    <button type="submit" class="btn btn-primary">Confirm identity</button>
                </form>
            </div>
        </div>
    )
}

export default Footer