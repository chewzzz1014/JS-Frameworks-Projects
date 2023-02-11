import React from 'react'
import { FaExpandArrowsAlt, FaExpandAlt } from 'react-icons/fa';

function TabHeading({ text, isFull, setIsFull }) {
    return (
        <div className='bg-slate-400 flex justify-between items-center px-3 py-1'>
            <div><b>{text}</b></div>
            {!isFull ? <FaExpandArrowsAlt /> : <FaExpandAlt />}
        </div>
    )
}

export default TabHeading
