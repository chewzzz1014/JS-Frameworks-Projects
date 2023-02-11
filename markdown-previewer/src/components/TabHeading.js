import React from 'react'

function TabHeading({ text, isFull, setIsFull }) {
    return (
        <div className='bg-slate-400 flex justify-between content-center px-3 py-1'>
            <div><b>{text}</b></div>
            <button><b>X</b></button>
        </div>
    )
}

export default TabHeading
