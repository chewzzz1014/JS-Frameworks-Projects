import React, { useState } from 'react';

export default function Form() {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    function handleFirstNameChange(e) {
        setFirstName(e.target.value)
    }

    function handleLastNameChange(e) {
        setLastName(e.target.value)
    }

    return (
        <form>
            <input
                type='text'
                placeholder='First name'
                onChange={handleFirstNameChange}
            />
            <input
                type='text'
                placeholder='Last name'
                onChange={handleLastNameChange}
            />
        </form>
    )
} 