const {Router} = require('express')

const router = Router()
let Comment = require('../models/Comment');


router.get('/admin' ,  (request, response) => {
  const data = Comment
  response.json(data)
})


module.exports = router