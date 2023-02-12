import React from 'react'
import Markdown from 'marked-react'
import TabHeading from './TabHeading'

function Previewer({ text, isFull, setIsFull, idx }) {

    return (
        <div
            className={`bg-white border-2 border-black prose lg:prose-xl w-11/12 mx-auto md:w-full mt-5 ${isFull[idx] ? 'h-full w-11/12' : ''}`}
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

