import React from 'react'
import Markdown from 'marked-react'

function Previewer({ text }) {
    return (
        <div
            className='border-2 border-red-600 prose lg:prose-xl w-11/12 mx-auto md:w-11/12 mt-5'
        >
            <div className='previewer p-5'>
                <Markdown>
                    {text}
                </Markdown>
            </div>
        </div>
    )
}

export default Previewer

