import React, { useState, useEffect } from 'react'
import {
    Container,
    AppBar,
    Typography,
    Grow,
    Grid
} from '@material-ui/core'
import { useDispatch } from 'react-redux'

import { getPosts } from './actions/posts'
import Form from './components/Form/Form'
import Posts from './components/Posts/Posts'
import useStyles from './styles.js'

function App() {
    const [currentId, setCurrentId] = useState(null)
    const classes = useStyles()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch, currentId])

    return (
        <Container maxWidth='lg'>
            <Grow in>
                <Container>
                    <Grid container justify-content='space-between' alignItems='stretch' spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App
