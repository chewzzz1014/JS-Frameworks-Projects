import React, { useState } from 'react'
import useStyles from './styles.js'
import {
    TextField,
    Button,
    Typography,
    Paper
} from '@material-ui/core'

function Form() {
    const [postData, setPostData] = useState({
        creator: '',
        title: '',
        message: '',
        tags: '',
        selectedFile: ''
    })
    const classes = useStyles()

    const handleSubmit = () => {

    }

    return (
        <Paper className={classes.paper}>
            <form
                autoComplete='off'
                noValidate
                className={classes.form}
                onSubmit={handleSubmit}
            >
                <Typography
                    variant='h6'
                >
                    Creating a Memory
                </Typography>
                <TextField
                    name='creator'
                    variant='outlined'
                    label='Creator'
                    fullWidth
                    value={postData.creator}
                    onChange={(e) => setPostData({
                        ...postData,
                        creator: e.target.value
                    })}
                />
                <TextField
                    name='title'
                    variant='outlined'
                    label='Title'
                    fullWidth
                    value={postData.title}
                    onChange={(e) => setPostData({
                        ...postData,
                        title: e.target.value
                    })}
                />
                <TextField
                    name='message'
                    variant='outlined'
                    label='Message'
                    fullWidth
                    value={postData.message}
                    onChange={(e) => setPostData({
                        ...postData,
                        message: e.target.value
                    })}
                />
                <TextField
                    name='tag'
                    variant='outlined'
                    label='Tag'
                    fullWidth
                    value={postData.tag}
                    onChange={(e) => setPostData({
                        ...postData,
                        tag: e.target.value
                    })}
                />
                <TextField
                    name='selectedFile'
                    variant='outlined'
                    label='Selected File'
                    fullWidth
                    value={postData.selectedFile}
                    onChange={(e) => setPostData({
                        ...postData,
                        selectedFile: e.target.value
                    })}
                />
            </form>
        </Paper>
    )
}

export default Form
