import bcrypt from 'bcryptjs'
import User from '../models/User.js'
import Strategy from 'passport-local'

const LocalStrategy = Strategy

module.exports = function (passport) {
    try {
        passport.use(
            new LocalStrategy({
                usernameField: 'email'
            }, async (email, password, done) => {
                // find is there any user with the given email
                const foundUser = await User.findOne({ email: email })

                if (!foundUser) {
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

    passport.serializeUser((user, done) => {
        done(null, user.id)
    })

    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
            done(err, user)
        })
    })
}

