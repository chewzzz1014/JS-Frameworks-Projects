import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

function TransactionList() {

    const context = useContext(GlobalContext)

    console.log(context)

    return (
        <div className='col-12'>
            <div className='row'>
                <div className='col-12 box-with-shadow item-box my-2 item-income'>
                    <span className='item-name'>Cash</span>
                    <div className='list-right'>
                        <span className='item-price'>+500</span>
                        <button className='delete-btn'>x</button>
                    </div>
                </div>
                <div className='col-12 box-with-shadow item-box my-2 item-expense'>
                    <span className='item-name '>Cash</span>
                    <div className="list-right">
                        <span className='item-price'>-40</span>
                        <button className='delete-btn'>x</button>
                    </div>
                </div>
                <div className='col-12 box-with-shadow item-box my-2 item-expense'>
                    <span className='item-name'>Cash</span>
                    <div className="list-right">
                        <span className='item-price'>-200</span>
                        <button className='delete-btn'>x</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TransactionList