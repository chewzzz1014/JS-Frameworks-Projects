const express = require('express')
const bcrypt = require('bcryptjs')
const router = express.Router()
const User = require('../models/User')

router.get('/', (req, res) => {
    res.send('User Route')
})

router.get('/login', (req, res) => {
    res.render('login')
})

router.get('/register', (req, res) => {
    res.render('register')
})

router.post('/register', async (req, res, next) => {
    const { name, email, password, password2 } = req.body
    let errors = []

    // any field is empty?
    if (!name || !email || !password || !password2) {
        errors.push({
            msg: 'Please fill in all fields'
        })
    }

    // passwords match?
    if (password !== password2) {
        errors.push({
            msg: 'Passwords do not match'
        })
    }

    // password length > 6?
    if (password.length < 6) {
        errors.push({
            msg: 'Password should be at least 6 characters long.'
        })
    }

    if (errors.length > 0) {
        res.render('register', {
            errors,
            name,
            email,
            password,
            password2
        })
    } else {
        // res.send('Pass')
        // validation passed

        try {
            const foundUser = await User.findOne({ email: email })
            if (foundUser) {
                // user exists. rerender form
                errors.push({
                    msg: 'Email is already registered'
                })
                res.render('register', {
                    errors,
                    name,
                    email,
                    password,
                    password2
                })
            } else {  // email not registered
                // create new user
                const newUser = new User({
                    name,
                    email,
                    password
                })

                await newUser.save()
                console.log(newUser)
                res.redirect('/users/login')
            }
        } catch (err) {
            next(err)
        }
    }

})

module.exports = router