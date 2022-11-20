import React, { useState } from 'react';

export default function Form() {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        comment: "",
        isFriendly: true,
        employment: "",
        favColor: ""
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
                        name='employment'
                        value='Unemployed'
                        checked={formData.employment === 'unemployed'}
                        onChange={handleChange}
                    /><span>Unemployed</span>
                </div>

                <div className='radio-options'>
                    <input
                        type='radio'
                        id='part-time'
                        name='employment'
                        value='Part Time'
                        checked={formData.employment === 'Part Time'}
                        onChange={handleChange}
                    /><span>Part Time</span>
                </div>

                <div className='radio-options'>
                    <input
                        type='radio'
                        id='full-time'
                        name='employment'
                        value='Full Time'
                        checked={formData.employment === 'Full Time'}
                        onChange={handleChange}
                    /><span>Full Time</span>
                </div>
            </fieldset>

            <br />

            <div className='fav-color'>
                <label>You favourite colour</label>
                <select
                    id='favColor'
                    value={formData.favColor}
                    onChange={handleChange}
                    name='favColor'
                >
                    <option value=''>---Choose---</option>
                    <option value='red'>Red</option>
                    <option value='orange'>Orange</option>
                    <option value='yellow'>Yellow</option>
                    <option value='green'>Green</option>
                    <option value='blue'>Blue</option>
                    <option value='indigo'>Indigo</option>
                    <option value='violet'>Violet</option>
                </select>
            </div>
            <br />
            <br />

            {/* <input type='submit' value='Submit' /> */}
            <button>Submit</button>

            <br />
            <br />

            <hr />

            <p>{`${formData.firstName} ${formData.lastName}`}</p>
            {formData.email && <p>Email: {`${formData.email}`}</p>}
            {formData.comment && <p>Comment: {`${formData.comment}`}</p>}
            {formData.employment && <p>Employment: {`${formData.employment}`}</p>}
            {formData.favColor && <p>Favourite Colour: {`${formData.favColor[0].toUpperCase() + formData.favColor.slice(1)}`}</p>}
        </form>
    )
} 