// Event Schema
// playlistID: integer, comment [ref: comment]
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { ObjectId } = mongoose.Types

const EventSchema = new Schema ({
    postedBy: {
        type: ObjectId,
         ref: 'User'
    },
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
    playlistId: {
        type: ObjectId,
        ref: 'Track'
    },
    comments: [{
        type: ObjectId,
        ref: 'Comment'
    }],
    date: {
        type: String,
        default: new Date(),
        required: true
    },
    time: {
        type: String,
        default: new Date(),
        required: true
    }
})

module.exports = Event = mongoose.model('Event', EventSchema)