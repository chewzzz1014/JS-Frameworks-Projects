import React from 'react'
import { Alert } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { uiActions } from '../store/ui-slice'

const Notification = ({ type, msg }) => {
    const noti = useSelector(state => state.ui.notification)
    const dispatch = useDispatch()
    const handleClose = () => {
        dispatch(uiActions.showNotification({
            open: false
        }))
    }

    return (
        <div>
            {noti.open && <Alert onClose={handleClose} severity={type}>
                {msg}
            </Alert>}
        </div>
    )
}

export default Notification
