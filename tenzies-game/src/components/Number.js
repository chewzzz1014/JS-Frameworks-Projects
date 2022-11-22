import React, { useState } from 'react'

export default function Number(props) {

    const { value, isHeld } = props.value
    const styles = {
        backgroundColor: isHeld ? '#59e391' : 'white'
    }

    return (
        <button className='btn-num' style={styles}>
            {value}
        </button>
    )
}