import React from 'react'
import Markdown from 'marked-react'

function Previewer({ text }) {
    return (
        <div
            className='border-2 border-red-600'
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

