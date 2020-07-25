const express = require('express')
const router = express.Router()
const db = require('../../models')
// Load Comment Model
const Comment = require('../../models/Comment')


// Show
router.get('/:id', (req, res) => {
    // res.send('SHOW')
    db.Comment.findById(req.params.id)
      .then(comments => {
        res.send(comments)
      })
      .catch(err => console.error(err))
})
  
// Create
router.post('/', (req, res) => {
  // res.send('CREATE')
  // check the body of the request for empty string and remove them from the body
  console.log('🏈')
  console.log(req.body)
  
  // res.send(req.body)
  db.Comment.create(req.body)
    .then(newComment => {
      res.send(newComment)
    })
    .catch(err => console.error(err))
})
  
// Update
router.put('/:id', (req, res) => {
  // res.send('UPDATE')
  db.Comment.findOneAndUpdate(
    {_id: req.params.id},
    req.body,
    { new: true }
  )
  .then(updatedComment => {
    res.send(updatedComment)
  })
  .catch(err => console.error(err))
})
  
// Delete
router.delete('/:id', (req, res) => {
  // res.send('DELETE')
  db.Comment.findOneAndDelete({_id: req.params.id })
    .then(deleteItem => {
      console.log(deleteItem)
      res.send({message: 'Successful Deletion'})
    })
    .catch(err => console.error(err))
})

module.exports = router;
