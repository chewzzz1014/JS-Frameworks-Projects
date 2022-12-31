// create db connection

const { MONGO_URI } = require('./config')
const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        // create connection
        const connection = await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            //useCreateIndex: true,
            useUnifiedTopology: true
        })

        // print the success stmt and mongo host with styles
        console.log(`mongo conncted: ${connection.connection.host}`.cyan.underline.bold)
    } catch (e) {
        console.log(`Error: ${e}`.red)
        process.exit(1)
    }
}

module.exports = connectDB
