import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {
    Container,
    Grow,
    Grid
} from '@material-ui/core'
import Posts from '../Posts/Posts'
import Form from '../Form/Form'
import { getPosts } from '../../actions/posts'
import {
    Outlet
} from 'react-router-dom'

function Home() {
    const [currentId, setCurrentId] = useState(null)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch, currentId])

    return (
        <>
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
            <Outlet />
        </>
    )
}

export default Home
