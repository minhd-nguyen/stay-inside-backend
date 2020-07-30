require('dotenv').config()
const express = require('express')
const router = express.Router()

const Event = require('../models/Event')
const { route } = require('./comments')

// API ROUTES

// GET -- post to home page
router.get('/', (req, res) => {
    Event.find()
    .populate('comments')
    .then(events => {
        res.send(events)
    }).catch(error => {
        res.send({message: 'Server error'})
        console.error(error)
    })
})

// POST -- post events to users page
router.post('/', (req, res) => {
    Event.find({postedBy: req.body.data.user.id})
        .populate('comments')
        .then(events => {
            res.send(events)
        }).catch(error => {
            res.send({message: 'Server error'})
            console.error(error)
        })
})

// POST -- add created event to db
router.post('/create', (req, res) => {

    const body = req.body
    let currentUrl = req.body.eventLink;
    let newUrl = currentUrl.replace(/^https?:\/\//,'')
    body.eventLink = newUrl

    Event.create(body)
        .then(newEvent => {
            res.send(newEvent)
        }).catch(error => {
            res.send({message: 'Server error'})
            console.error(error)
        })
})

// PUT -- edit said event
router.put('/:id', (req, res) => {
    Event.findOneAndUpdate({ _id: req.params.id },
        req.body,
        {new: true}
        )
        .then(updatedEvent => {
            res.send(updatedEvent)
        })
        .catch(error => {
            res.send({message: 'Server error'})
            console.error(error)
        })
})

// DELETE -- delete said events
router.delete('/:id', (req, res) => {
    Event.findByIdAndDelete({ _id: req.params.id})
        .then(deleteEvent => {
            res.send('Event Deleted')
            console.log(deleteEvent)
        }).catch(error => {
            res.send({message: 'Server error'})
            console.error(error)
        })
})

module.exports = router;
