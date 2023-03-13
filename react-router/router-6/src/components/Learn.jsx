import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Learn() {
    return (
        <div>
            <h1>Learn Route</h1>
            <h4>All courses are listed here</h4>
            <Link
                to='/learn/courses'
                className='btn btn-success'
            >
                courses
            </Link>
            <Link
                to='/learn/bundles'
                className='btn btn-primary'
            >
                bundle
            </Link>

            {/* to display Courses or Bundles component */}
            <Outlet />
        </div>
    )
}

export default Learn
