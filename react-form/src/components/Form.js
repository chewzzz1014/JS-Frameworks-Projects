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

            <br />

            <div className='checkbox'>
                <input
                    type="checkbox"
                    id='isFriendly'
                    name='isFriendly'
                    checked={formData.isFriendly}
                    onChange={handleChange}
                /><span>Are you friendly?</span>
                <br />
            </div>

            <br />

            <fieldset>
                <legend>Current employment status</legend>

                <div className='radio-options'>
                    <input
                        type='radio'
                        id='unemployed'
                    /><span>Unemployed</span>
                </div>

                <div className='radio-options'>
                    <input
                        type='radio'
                        id='part-time'
                    /><span>Part Time</span>
                </div>

                <div className='radio-options'>
                    <input
                        type='radio'
                        id='full-time'
                    /><span>Full Time</span>
                </div>
            </fieldset>

            <p>{`${formData.firstName} ${formData.lastName}`}</p>
            {formData.email && <p>Email: {`${formData.email}`}</p>}
            {formData.comment && <p>Comment: {`${formData.comment}`}</p>}
        </form>
    )
} 