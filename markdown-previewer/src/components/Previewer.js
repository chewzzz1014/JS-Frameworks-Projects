import React from 'react'
import Markdown from 'marked-react'

function Previewer({ text }) {
    return (
        <div
            className='border-2 border-red-600'
        >
            <Markdown>
                {text}
            </Markdown>
        </div>
    )
}

export default Previewer