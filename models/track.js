// Track Schema
// playlistID: integer, comment [ref: comment]
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TrackSchema = new Schema ({
    
    name: {
        type: String,
    },
    artist: {
        type: String
    },
    album: {
        type: String
    },
    playlistId: {
        type: Number
    },
    // playlistID goes here type: Int ref
    comments: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'comments'
    }]
})

module.exports = Track = mongoose.model('events', TrackSchema)