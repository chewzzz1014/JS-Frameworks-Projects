import React, { useState } from "react";

export default function Square() {
    const [value, setValue] = useState(null)

    function handleClick() {
        console.log('Click')
    }

    return (
        <button
            className="square"
            onClick={handleClick}
        >
            {value}
        </button>
    )
}