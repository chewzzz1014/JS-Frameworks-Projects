import React from 'react'
import { HiPhotograph } from 'react-icons/hi'

function Form() {
    return (
        <form>
            <div className='form-fields'>
                <input type='text'></input>
                <input type='text'></input>
            </div>
            <div className='form-button'>
                <button><span><HiPhotograph size='20px' /></span> Get a new meme image</button>
            </div>
        </form>
    )
}

export default Form