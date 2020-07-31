require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')
const bodyParser = require('body-parser')

// initialize Express server
const app = express()
const User = require("./models/User")

//  require router
 const users = require('./routes/users')
 const events = require('./routes/events')
 const comments = require('./routes/comments')
 const tracks = require('./routes/tracks')

// middleware to allow to CORS requests
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
    next()
})

//  config our DB
const uri = process.env.MONGOD_URI

<<<<<<< HEAD
// Mongo Atlas connect to db
=======
//console.log(uri)

>>>>>>> 42eb86b42dddd854eded2eee27dda55e3767d8ec
const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

<<<<<<< HEAD
// connect to mongodb (using Atlas)
mongoose.connect(uri)
    .then((() => console.log('MongoDB connected... 🥭')))
=======
// connect to Mongodb( using Atlas)
mongoose.connect(uri)
    .then((() => console.log('MongoDB conneted...🏈')))
>>>>>>> 42eb86b42dddd854eded2eee27dda55e3767d8ec
    .catch(err => console.log(err))

// bodyParser middleware
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// test routing
app.get('/', (req, res) => {
    res.send("Hello world!\n Server is up and running 👍")
})

// passport middleware
app.use(passport.initialize())

// passport JWT token set/config
require('./config/passport')(passport)

// setup our routes
app.use('/users', users)
app.use('/events', events)
app.use('/comments', comments)
app.use('/tracks', tracks)


// start our sever
app.listen(process.env.PORT || 3000, () => console.log(`With my toes on port ${process.env.PORT} its such a lovely view 🎧`))
