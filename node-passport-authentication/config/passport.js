const LocalStrategy = require('passport-local').Strategy
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const User = require('../models/User')

module.exports = function (passport) {
    try {
        passport.use(
            new LocalStrategy({
                usernameField: 'email'
            }, async (email, password, done) => {
                // find is there any user with the given email
                const foundUser = await User.findOne({ email: email })

                if (!user) {
                    // email is not matched
                    return done(null, false, { message: 'Email is not registered' })
                }

                // email is matched
                const isPasswordMatched = await bcrypt.compare(password, foundUser.password)
                if (isPasswordMatched) {
                    return done(null, foundUser, { message: 'Incorrect Password' })
                } else {
                    return done(null, false)
                }
            })
        )
    } catch (err) {
        console.log(err)
    }
}

