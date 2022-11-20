import React, { useState } from 'react';

export default function Form() {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: ""
    })

    function handleChange(e) {

        setFormData((prev) => {
            return {
                ...prev,
                [e.target.name]: [e.target.value]
            }
        })
    }

    // function handleFirstNameChange(e) {
    //     setFirstName(e.target.value)
    // }

    // function handleLastNameChange(e) {
    //     setLastName(e.target.value)
    // }

    return (
        <form>
            <input
                type='text'
                placeholder='First name'
                name='firstName'
                value={formData.lastName}
                onChange={handleChange}
            />
            <input
                type='text'
                placeholder='Last name'
                name='lastName'
                value={formData.lastName}
                onChange={handleChange}
            />

            <input
                type='email'
                placeholder='Email'
                name='email'
                value={formData.email}
                onChange={handleChange}
            />
            <p>{`${formData.firstName} ${formData.lastName}`}</p>
            {formData.email && <p>Email: {`${formData.email}`}</p>}
        </form>
    )
} 