const express = require('express')
const router = require('./router')

const PORT = 8000

const app = express()
const mongoose = require('mongoose')

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
