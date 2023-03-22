import React from 'react'
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

function Auth() {
    const classes = useStyles()
    const isSignUp = false
    const handleSubmit = () => {

    }
    const handleChange = () => {

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
                                    <Grid xs={6} md={12}>

                                    </Grid>
                                    <TextField name='firstName' label='First Name' handleChange={handleChange} autoFocus xs={6}>
                                    </TextField>
                                </>
                            )
                        }
                    </Grid>
                </form>
            </Paper>
        </Container >
    )
}

export default Auth
