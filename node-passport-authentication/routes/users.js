const express = require('express')
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

router.post('/register', (req, res, next) => {
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

    res.send('hello')
})

module.exports = router