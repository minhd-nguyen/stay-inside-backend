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
        type: Date,
        default: Date.now()
    }
})

module.exports = Event = mongoose.model('Event', EventSchema)