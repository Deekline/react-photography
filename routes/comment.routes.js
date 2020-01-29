const {Router} = require('express')

const router = Router()
let Comment = require('../models/Comment');
let Signs = require('../models/Signs')


router.post('/form', async(request,response) => {
  Comment = [...Comment, request.body]
  response.send(Comment)
  console.log(Comment)
})
router.post('/sign', (request,response) => {
  Signs = [...Signs, request.body]
  response.send(Signs)
  console.log(Signs)
})

router.get('/comment' ,  (request, response) => {
  const data = Comment
  console.log('get')
  console.log(Comment)
  response.json(data)
})

router.get('/reserve', (request, response) => {
  const data = Signs
  response.json(data)
})

module.exports = router