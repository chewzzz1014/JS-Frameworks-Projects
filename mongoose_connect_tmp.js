// add MONGO_URI in .env file inside project root folder
// read content in .env file by using dotenv module :
/*
    1. npm i dotenv
    2. require("dotenv").config()
    3. process.env.X will refer to bash variable in .env file
*/
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connect('mongodb://localhost:27017/exercise', { useNewUrlParser: true })
    .then(() => {
        console.log("mongo connection open");
    })
    .catch((err) => {
        console.log(err);
    })