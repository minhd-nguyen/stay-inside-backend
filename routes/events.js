require('dotenv').config()
const express = require('express')
const router = express.Router()
//const db = require('../models')

const Event = require('../models/Event')
const User = require('../models/User')

// API Routes
// TODO: GET -- post events to home page
router.get('/', (req, res) => {
    Event.find()
        .then(events => {
            res.send(events)
        }).catch(error => {
            res.send({message: 'Server error'})
            console.error(error)
        })
})

// TODO: POST -- add created event to db
router.post('/create', (req, res) => {
    // get event created by specific user
    // add event to db and register it to be with a specific user
    Event.create(req.body)
        .then(newEvent => {
            res.send(newEvent)
        }).catch(error => {
            res.send({message: 'Server error'})
            console.error(error)
        })
})

// TODO: PUT -- edit said event

// TODO: DELETE -- delete said event