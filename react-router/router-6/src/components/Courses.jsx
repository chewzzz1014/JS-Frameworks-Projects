import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Courses() {
    const courseList = ['React', 'Angular', 'Vue', 'Nodejs']
    const randomCourseName = courseList[Math.floor(Math.random() * courseList.length)]

    return (
        <div>
            <h1>Course List</h1>
            <h4>Course card</h4>

            <p>More test</p>
            <NavLink></NavLink>
            <Outlet />
        </div>
    )
}

export default Courses
