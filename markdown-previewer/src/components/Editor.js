import React from 'react'
import TabHeading from './TabHeading'

function Editor({ text, handleTextChange, isFull, setIsFull, idx }) {

    return (
        <div
            className={`border-2 border-yellow-500 w-4/5 mx-auto md:w-5/12 mt-5 ${isFull[idx] ? 'h-screen w-11/12' : ''}`}
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
                className={`border-2 border-purple-600 w-full ${isFull[idx] ? 'h-screen' : ''}`}
                onChange={(e) => handleTextChange(e)}
            >
                {text}
            </textarea>
        </div>
    )
}

export default Editor