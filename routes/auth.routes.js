const {Router} = require('express')

const router = Router()
const jwt = require('jsonwebtoken')
const User = require('../models/User');




router.post('/register', async (req, res) => {
  try {

    console.log(req.body)

    const {email, password} = req.body
    const user = await User.email === email
    const pass = await User.password === password

    if(!user || !pass) {
      return res.status(400).json({message: 'Wrong data'})
    }

    const token = jwt.sign (
      {userId: User.id},
      'Deekline',
      {expiresIn: '1h'}
    )
    // Add matching of password
    if (user && pass) {
      return res.json({token, userId: User.id})
    }

  } catch ( e ) {
    res.status(500).json({message: "Try Again"})
  }
})

module.exports = router