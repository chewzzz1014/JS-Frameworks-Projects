import React from 'react'
import TabHeading from './TabHeading'

function Editor({ text, handleTextChange, isFull, setIsFull, idx }) {

    return (
        <div
            className={`bg-white border-2 border-black w-4/5 mx-auto md:w-5/12 mt-5  ${isFull[idx] ? 'h-screen w-11/12' : ''}`}
        >
            <TabHeading
                text={'Editor'}
                isFull={isFull}
                setIsFull={setIsFull}
                position={idx}
            />
            <textarea
                id='editor'
                rows='15'
                className={`focus:outline-0 px-4 w-full ${isFull[idx] ? 'h-full' : ''}`}
                onChange={(e) => handleTextChange(e)}
            >
                {text}
            </textarea>
        </div>
    )
}

export default Editor