import React from 'react'
import Markdown from 'marked-react'
import TabHeading from './TabHeading'

function Previewer({ text, isFull, setIsFull, idx }) {

    return (
        <div
            className='border-2 border-red-600 prose lg:prose-xl w-11/12 mx-auto md:w-full mt-5'
        >
            <TabHeading
                text={'Previewer'}
                isFull={isFull}
                setIsFull={setIsFull}
                position={idx}
            />
            <div className='previewer p-5'>
                <Markdown className=''>
                    {text}
                </Markdown>
            </div>
        </div>
    )
}

export default Previewer

