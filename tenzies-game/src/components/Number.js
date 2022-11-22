import React, { useState } from 'react'

export default function Number(props) {

    const { id, value, isHeld } = props.value
    const styles = {
        backgroundColor: isHeld ? '#59e391' : 'white'
    }

    return (
        <button
            className='btn-num'
            style={styles}
            onClick={() => props.handler(id)}
        >
            {value}
        </button>
    )
}