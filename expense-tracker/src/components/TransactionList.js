import React from 'react'

function TransactionList() {
    return (
        <div className='col-12'>
            <div className='row'>
                <div className='col-12 box-with-shadow item-box my-2 item-income'>
                    <span className='item-name'>Cash</span>
                    <div className='list-right'>
                        <span className='item-price'>+500</span>
                        <button class='delete-btn'>x</button>
                    </div>
                </div>
                <div className='col-12 box-with-shadow item-box my-2 item-expense'>
                    <span className='item-name '>Cash</span>
                    <div className="list-right">
                        <span className='item-price'>-40</span>
                        <button class='delete-btn'>x</button>
                    </div>
                </div>
                <div className='col-12 box-with-shadow item-box my-2 item-expense'>
                    <span className='item-name'>Cash</span>
                    <div className="list-right">
                        <span className='item-price'>-200</span>
                        <button class='delete-btn'>x</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TransactionList