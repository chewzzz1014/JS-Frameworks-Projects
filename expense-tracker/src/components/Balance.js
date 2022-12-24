import React from 'react'

function Balance() {
    return (
        < div className='header-balance-display' >
            <p className='col-12 slight-bold'>YOUR BALANCE</p>
            <h1 className='mb-3 balance'>
                $
                <span className='balance'>
                    260.00
                </span>
            </h1>
        </div>
    )
}

export default Balance

