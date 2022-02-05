const express = require('express')
const router = require('./router')
const cors = require('cors')
var bodyParser = require('body-parser')



const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(router)

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB')
  })
  .catch((err) => {
    console.log(err)
  })

app.listen(PORT, async () => {
  console.log(`server up on port ${PORT}`)
})