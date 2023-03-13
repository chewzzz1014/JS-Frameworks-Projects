import React from 'react'
import { Link } from 'react-router-dom'

function Learn() {
    return (
        <div>
            <h1>Learn Route</h1>
            <h4>All courses are listed here</h4>
            <Link
                to='/learn/course'
                className='text-white'
            >
                courses
            </Link>
            <Link
                to='/learn/bundle'
                className='text-white'
            >
                bundle
            </Link>
        </div>
    )
}

export default Learn
