import express from 'express'
import { application } from 'express'
import bcrypt from 'bcryptjs'
import passport from 'passport'
import User from '../models/User.js'

const router = express.Router()

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

                // hash password using bcrypt
                const salt = await bcrypt.genSalt(10)
                const hash = await bcrypt.hash(newUser.password, salt)

                // update password to hashed password
                newUser.password = hash

                // bcrypt.genSalt(10, (err, salt) => {
                //     bcrypt.hash(newUser.password, salt, (err, hash) => {
                //         if (err)
                //             throw err

                //             newUser.password = hash
                //     })
                // })

                await newUser.save()
                console.log(newUser)

                // show flash message and redirect
                req.flash('success_msg', 'You are now registered')
                res.redirect('/users/login')
            }
        } catch (err) {
            next(err)
        }
    }

})


// after user enter email, password and press enter
router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/dashboard',
        failureRedirect: '/users/login',
        failureFlash: true,
        failureMessage: true
    })(req, res, next)
})

router.get('/logout', (req, res, err) => {
    req.logout((err) => {
        if (err)
            return next(err)
        req.flash('success_msg', 'You are logged out')
        res.redirect('/users/login')
    })
})

export default router