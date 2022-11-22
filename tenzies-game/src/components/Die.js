import React, { useState } from 'react'
import Number from './Number'

export default function Die() {
    return (
        <div className='number-section'>
            <div className='number-row-1'>
                <Number value={1} />
                <Number value={1} />
                <Number value={1} />
                <Number value={1} />
                <Number value={1} />
            </div>
            <div className='number-row-2'>
                <Number value={1} />
                <Number value={1} />
                <Number value={1} />
                <Number value={1} />
                <Number value={1} />
            </div>
        </div>
    )
}