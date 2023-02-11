import React from 'react'
import Markdown from 'marked-react'

function Previewer({ text }) {
    return (
        <div
            className='border-2 border-red-600 prose lg:prose-x'
        >
            <Markdown>
                {text}
            </Markdown>
        </div>
    )
}

export default Previewer

