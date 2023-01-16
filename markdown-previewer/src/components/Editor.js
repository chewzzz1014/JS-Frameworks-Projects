import React from 'react'

function Editor({ text, handleTextChange }) {
    return (
        <div
            className='border-2 border-yellow-500 flex container min-h-[30%] max-w-xl'
        >
            <textarea
                id='editor'
                className='border-2 border-purple-600 flex-1'
                onChange={(e) => handleTextChange(e)}
            >
                {text}
            </textarea>
        </div>
    )
}

export default Editor