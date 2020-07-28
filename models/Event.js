// Event Schema
// playlistID: integer
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { ObjectId } = mongoose.Types

const EventSchema = new Schema ({
    postedBy: {
<<<<<<< HEAD
        type: ObjectId, 
        ref: 'User'
=======
        type: ObjectId,
         ref: 'User'
>>>>>>> e45c3f8dbcfe90f9fdf4ac109dea4f4a15d53106
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