import React, { useState } from 'react'
import TabHeading from './TabHeading'

function Editor({ text, handleTextChange }) {
    const [isFull, setIsFull] = useState(false)

    return (
        <div
            className={`border-2 border-yellow-500 w-4/5 mx-auto md:w-5/12 mt-5 ${isFull ? 'h-screen' : ''}`}
        >
            <TabHeading
                text={'Editor'}
                isFull={isFull}
                setIsFull={setIsFull}
            />
            <textarea
                id='editor'
                rows='15'
                className={`border-2 border-purple-600 w-full ${isFull ? 'h-screen' : ''}`}
                onChange={(e) => handleTextChange(e)}
            >
                {text}
            </textarea>
        </div>
    )
}

export default Editor