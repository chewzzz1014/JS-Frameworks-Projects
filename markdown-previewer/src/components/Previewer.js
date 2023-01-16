import React from 'react'
import Markdown from 'marked-react'

function Previewer({ text }) {
    return (
        <div
            className='border-2 border-red-600 min-h-[25%] max-w-xl break-words'
        >
            <p>
                <Markdown>
                    {text}
                </Markdown>
            </p>
        </div>
    )
}

export default Previewer

