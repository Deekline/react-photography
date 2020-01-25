const {Router} = require('express')

const router = Router()
let Signs = require('../models/Signs');

router.post('/', (request, response) => {
  console.log(request.body)
  Signs = [...Signs, request.body]
  response.send(Signs)
})

module.exports = router