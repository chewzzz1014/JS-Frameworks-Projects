import React from 'react'
import { useParams } from 'react-router-dom'

function CourseId() {
    const { courseId } = useParams()
    return (
        <div>
            <h1>URL Params is: {courseId}</h1>
        </div>
    )
}

export default CourseId
