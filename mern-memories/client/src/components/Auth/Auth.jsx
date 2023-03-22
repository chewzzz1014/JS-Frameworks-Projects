import React, { useState } from 'react'
import {
    Avatar,
    Button,
    Paper,
    Grid,
    Typography,
    Container,
    TextField
} from '@material-ui/core'
import useStyles from './styles'
import LockOutlinedIcon, { Looks } from '@material-ui/icons/LockOutlined'
import Input from './Input'

function Auth() {
    const classes = useStyles()
    const [showPassword, setShowPassword] = useState(false)

    const isSignUp = false
    const handleSubmit = () => {

    }
    const handleChange = () => {

    }

    const handleShowPassword = () => {

    }

    return (
        <Container component='main' maxWidth='xs'>
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant='h5'>
                    {isSignUp ? 'Sign Up' : 'Sign In'}
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignUp && (
                                <>
                                    <Input
                                        name='firstName'
                                        label='First Name'
                                        handleChange={handleChange}
                                        autoFocus
                                        half
                                    />
                                    <Input
                                        name='firstName'
                                        label='First Name'
                                        handleChange={handleChange}
                                        half
                                    />
                                </>
                            )
                        }
                        <Input
                            name='email'
                            label='Email Address'
                            handleChange={handleChange}
                            type='email'
                        />
                        <Input
                            name='password'
                            label='Password'
                            handleChange={handleChange}
                            type={showPassword ? 'text' : 'password'}
                            handleShowPassword={handleShowPassword}
                        />
                    </Grid>
                </form>
            </Paper>
        </Container >
    )
}

export default Auth
