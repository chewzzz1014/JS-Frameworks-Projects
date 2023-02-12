import React from 'react'
import { BsArrowsAngleContract, BsArrowsFullscreen } from 'react-icons/bs';

function TabHeading({ text, isFull, setIsFull, position }) {

    return (
        <div className='bg-slate-400 flex justify-between items-center px-3 py-1'>
            <div><b>{text}</b></div>
            <button
                onClick={() =>
                    setIsFull(isFull.map((e, idx) => idx === position ? !e : e))
                }
            >
                {!isFull[position] ? <BsArrowsFullscreen /> : <BsArrowsAngleContract />}
            </button>
        </div>
    )
}

export default TabHeading
