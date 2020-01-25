const {Router} = require('express')

const router = Router()
let Comment = require('../models/Comment');


router.post('/form', async(request,response) => {
  console.log(request.body)
  Comment = [...Comment, request.body]
  request.send(Comment)
})

module.exports = router