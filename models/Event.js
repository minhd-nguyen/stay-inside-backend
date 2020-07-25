// Event Schema
// userID: integer(ref),  playlistID: integer, comment [ref: comment]
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const EventSchema = new Schema ({
    //userID ref goes here
    title: {
        type: String,
        required: true
    },
    eventLink: {
        type: String
    },
    description: {
        type: String
    },
    // playlistID goes here type: Int ref
    // comment ref
})

module.exports = Event = mongoose.model('events', EventSchema)