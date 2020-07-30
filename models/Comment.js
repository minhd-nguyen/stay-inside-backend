const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { ObjectId} = mongoose.Types

// User Schema
const CommentSchema = new Schema({
  postedBy: {
    type: ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String
  },
  content: {
    type: String,
    required: true,
  },
  eventId: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model('Comment', CommentSchema);
