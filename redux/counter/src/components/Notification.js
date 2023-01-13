import React from 'react'
import { Alert } from '@mui/material'

const Notification = ({ type, msg }) => {
    return (
        <div>
            <Alert severity={type}>
                {msg}
            </Alert>
        </div>
    )
}

export default Notification
