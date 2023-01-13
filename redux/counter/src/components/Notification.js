import React from 'react'
import { Alert } from '@mui/material'
import { useSelector } from 'react-redux'

const Notification = ({ type, msg }) => {
    const noti = useSelector(state => state.ui.notification)


    return (
        <div>
            {noti.open && <Alert severity={type}>
                {msg}
            </Alert>}
        </div>
    )
}

export default Notification
