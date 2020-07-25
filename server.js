require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const passport = require("passport")
const bodyParser = require("body-parser") 

// initilize Express server
const app = express()

//  require router
 const users = require('./routes/users')
 const comments = require('./routes/comments')

//  middleware to CORS requests
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")
    res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
    next()
})

// bodyParser middleware 
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//  config our DB
const db = process.env.MONGODB_URI

// connect to Mongodb( using Atlas)
mongoose.connect(db)
    .then((() => console.log('MongoDB conneted...🏈')))
    .catch(err => console.log(err))

//  test routing
app.get('/', function(req, res) { 
    res.send("Hello, World! Server is up and running 🥎 ")
})

//  passport middleware
app.use(passport.initialize())

//  passport JWT token set/config
require('./config/passport')(passport)

//  setup out routes
app.use('/users', users)
app.use('/comments', comments)


// start our sever
app.listen(process.env.PORT || 3000, () => console.log(`Server is running on ${process.env.PORT} smoothly 🏀 🏀 🏀`))