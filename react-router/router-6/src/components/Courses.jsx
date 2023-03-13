import React from 'react'
import { Outlet } from 'react-router-dom'

function Courses() {
    return (
        <div>
            <h1>Course List</h1>
            <h4>Course card</h4>
            <Outlet />
        </div>
    )
}

export default Courses
