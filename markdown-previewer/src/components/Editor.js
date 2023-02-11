import React, { useState } from 'react'
import TabHeading from './TabHeading'

function Editor({ text, handleTextChange }) {
    return (
        <div
            className='border-2 border-yellow-500 w-4/5 mx-auto md:w-5/12 mt-5'
        >
            <TabHeading />
            <textarea
                id='editor'
                rows='15'
                className='border-2 border-purple-600 w-full'
                onChange={(e) => handleTextChange(e)}
            >
                {text}
            </textarea>
        </div>
    )
}

export default Editor