// Track Schema
// playlistID: integer, comment [ref: comment]
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { ObjectId } = mongoose.Types

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
    }
})

module.exports = Track = mongoose.model('Track', TrackSchema)