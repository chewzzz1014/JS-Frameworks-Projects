import React, { useState } from 'react'

export default function Number(props) {
    return (
        <button className='btn-num'>
            {props.value}
        </button>
    )
}