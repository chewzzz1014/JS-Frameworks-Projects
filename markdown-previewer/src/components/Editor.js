import React from 'react'

function Editor({ text, handleTextChange }) {
    return (
        <div
            className='border-2 border-yellow-500 w-4/5 mx-auto md:w-1/3 mt-5'
        >
            <textarea
                id='editor'
                className='border-2 border-purple-600'
                onChange={(e) => handleTextChange(e)}
            >
                {text}
            </textarea>
        </div>
    )
}

export default Editor