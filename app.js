const express = require("express");
const config = require("config");
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(
  cors({
    origin:'http://localhost:3000',
    credentials: true
  })
)

app.use(express.json({ extended: true }))
app.use(express.urlencoded({
  extended: false
})
)


app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/contact', require('./routes/comment.routes'))
app.use('/', require('./routes/sign.routes'))
app.use('/', require('./routes/getComment.routes'))

const PORT = config.get("port") || 5000;


app.listen(PORT, () => console.log(`start at port: ${PORT}`))









