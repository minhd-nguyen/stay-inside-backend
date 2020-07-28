const mongoose = require('mongoose');
const Schema = mongoose.Schema;
<<<<<<< HEAD
const { ObjectId } = mongoose.Types

// User Schema
const CommentSchema = new Schema ({
  postedBy: {
    type: ObjectId,
    ref: 'User',
    required: true,
=======
const { ObjectId} = mongoose.Types

// User Schema
const CommentSchema = new Schema({
  postedBy: {
    type: ObjectId,
    ref: 'User',
    required: true
>>>>>>> e45c3f8dbcfe90f9fdf4ac109dea4f4a15d53106
  },
  content: {
    type: String,
    required: true,
  },
  // eventId: {
  //   type: String,
<<<<<<< HEAD
  //   // required: true
=======
  //   required: true,
>>>>>>> e45c3f8dbcfe90f9fdf4ac109dea4f4a15d53106
  // },
  date: {
    type: Date,
    default: Date.now()
  }
});

<<<<<<< HEAD
module.exports = Comment = mongoose.model('Comment', CommentSchema)
=======
module.exports = Comment = mongoose.model('Comment', CommentSchema);
>>>>>>> e45c3f8dbcfe90f9fdf4ac109dea4f4a15d53106
