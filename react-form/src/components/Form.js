import React, { useState } from 'react';

export default function Form() {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        comment: "",
        isFriendly: true
    })

    function handleChange(e) {

        // it's 'checked' for checkbox instead of 'value'
        const { name, value, type, checked } = e.target

        setFormData((prev) => {
            return {
                ...prev,
                [name]: type === 'checkbox' ? checked : value
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

            <textarea
                value={formData.comment}
                placeholder='Comment'
                name='comment'
                value={formData.comment}
                onChange={handleChange}
            />

            <input
                type="checkbox"
                id='isFriendly'
                name='isFriendly'
                checked={formData.isFriendly}
                onChange={handleChange}
            />
            <label htmlFor='isFriendly'>Are you friendly?</label>
            <br />


            <fieldset>
                <legend>Current employment status</legend>

                <input
                    type='radio'
                    id='unemployed'
                />
                <label htmlFor='unemployed'>Unemployed</label>
                <br />

                <input
                    type='radio'
                    id='part-time'
                />
                <label htmlFor='part-time'>Part time</label>
                <br />

                <input
                    type='radio'
                    id='full-time'
                />
                <label htmlFor='full-time'>Full time</label>
                <br />
            </fieldset>

            <p>{`${formData.firstName} ${formData.lastName}`}</p>
            {formData.email && <p>Email: {`${formData.email}`}</p>}
            {formData.comment && <p>Comment: {`${formData.comment}`}</p>}
        </form>
    )
} 