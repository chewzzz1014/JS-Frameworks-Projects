import React, { useState } from 'react';

export default function Form() {

    const [firstName, setFirstName] = useState("")

    function handleChange(e) {
        setFirstName(e.target.value)
        console.log(firstName)
    }

    return (
        <form>
            <input
                type='text'
                placeholder='First name'
                onChange={handleChange}
            />
        </form>
    )
}